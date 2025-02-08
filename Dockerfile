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

# 커스텀 Nginx 설정 파일을 템플릿으로 복사
COPY default.conf.template /etc/nginx/conf.d/default.conf.template

# 빌드된 React 파일을 Nginx의 정적 파일 경로로 복사
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

# 환경 변수로 Nginx 설정 파일 생성 후 실행
CMD ["sh", "-c", "envsubst '$BACKEND_URL' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
