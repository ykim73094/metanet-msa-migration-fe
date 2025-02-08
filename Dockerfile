# 1️⃣ React 애플리케이션 빌드 단계
FROM node:22 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . . 
RUN npm run build

# 2️⃣ Nginx를 사용하여 정적 파일 및 프록시 제공
FROM nginx:alpine

# 환경 변수 적용을 위한 도구 설치 (envsubst)
RUN apk add --no-cache bash gettext

# Nginx 설정 파일 템플릿 복사
COPY default.conf.template /etc/nginx/conf.d/default.conf.template

# 환경 변수 적용 후 변환 (Build Time)
RUN envsubst < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# 빌드된 React 파일을 Nginx의 정적 파일 경로로 복사
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
