import styled from 'styled-components';

export const Component = styled.div`
    background-color: white;
    padding: 80px 30px 100px 400px;
    height: 100vh;
`;

// 로그인 타이틀
export const LoginTitle = styled.div`
    font-size: 28px;
    padding: 100px 30px 50px 30px;
    font-weight: 600;
    line-height: 1.5;
`;

export const InputBox = styled.div`
    margin: 0px auto;
    display: flex; /* 부모 요소가 자식 요소를 감싸도록 설정 */
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center; /* 수평 중앙 정렬 */
`;

// 입력창
export const LoginInput = styled.input`
    width: 360px;
    padding: 18px 25px;
    margin-left: 30px;
    font-size: 20px;
    border-radius: 20px;
    background-color: #fafafa;
    border: none;
    font-weight: 500;
    margin-top: 30px;
`;

// 로그인 버튼
export const LoginBtn = styled.div`
    position: fixed;
    width: 340px;
    background-color: #5061ff;
    color: white;
    text-align: center;  
    left: 50%;
    bottom: 20%;
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

// 회원가입 버튼
export const SigninBtn = styled.div`
    position: fixed;
    width: 340px;
    background-color: white;
    border: 2px solid #5061ff;
    color: #5061ff;
    text-align: center;  
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    padding: 20px 0px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
`;