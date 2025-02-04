import styled from 'styled-components';

export const Component = styled.div`
    background-color: white;
    height: 100vh;
`;

// 회원가입 타이틀
export const SignInTitle = styled.div`
    font-size: 28px;
    padding: 30px;
    font-weight: 600;
    line-height: 1.5;
    padding-top: 80px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 입력창
export const SignInInput = styled.input`
    width: 360px;
    padding: 18px 25px;
    margin-left: 30px;
    font-size: 20px;
    border-radius: 20px;
    background-color: #fafafa;
    border: none;
    font-weight: 500;
    margin-top: 30px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const SignInInput1 = styled.input`
    width: 360px;
    padding: 18px 25px;
    margin-left: 30px;
    font-size: 20px;
    border-radius: 20px;
    background-color: #fafafa;
    border: none;
    font-weight: 500;
    margin-top: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const SignInInput2 = styled.input`
    width: 360px;
    padding: 18px 25px;
    margin-left: 30px;
    font-size: 20px;
    border-radius: 20px;
    background-color: #fafafa;
    border: none;
    font-weight: 500;
    margin-top: 30px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 다음버튼
export const NextBtn = styled.div`
    position: fixed;
    width: 340px;
    background-color: #5061ff;
    color: white;
    text-align: center;  
    left: 51%;
    bottom: 10%;
    transform: translateX(-50%);
    padding: 20px 0px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease; /* 0.3초 동안 부드럽게 변함 */
    &:hover {
        background-color: #6a78ff; /* 기존 색상보다 연한 색상 */
    }
`;

// 성별 선택 컨테이너
export const GenderBtnBox = styled.div`
    display: flex;
    padding: 18px 10px;
    justify-content: center;
    margin-top: 30px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

// 남자 버튼
export const GenderBtn1 = styled.div`
  padding: 20px 60px;
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  background-color: ${({ isActive }) => (isActive ? "#5061ff" : "transparent")};
  color: ${({ isActive }) => (isActive ? "white" : "#afafaf")};
  border: 3px solid ${({ isActive }) => (isActive ? "#5061ff" : "#f2f2f2")};
`;

// 여자 버튼
export const GenderBtn2 = styled.div`
  padding: 20px 60px;
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  background-color: ${({ isActive }) => (isActive ? "#5061ff" : "transparent")};
  color: ${({ isActive }) => (isActive ? "white" : "#afafaf")};
  border: 3px solid ${({ isActive }) => (isActive ? "#5061ff" : "#f2f2f2")};
`;

export const ObstacleType = styled.div`
  width: 350px;
  margin: 10px auto 30px auto;
`;

export const Select = styled.select`
  width: 100%;
  border: 2px solid #5061ff;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  appearance: none; /* 기본 화살표 제거 */
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%235061FF'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")
    no-repeat right 10px center;
  background-color: #fff;
  background-size: 30px;

  &:focus {
    outline: none;
    border-color: #4050d8;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const ServiceText = styled.div`
    font-size: 30px;
    padding: 60px 0px 10px 0px;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
`;