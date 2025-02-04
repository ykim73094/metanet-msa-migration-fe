import styled from 'styled-components';

export const Component = styled.div`
    padding: 70px 0px 100px 0px;
    background-color: #F7F8FF;
`;

// 헤더 타이틀
export const HeaderTitle = styled.div`
    padding: 30px 20px 15px 20px;
    font-size: 27px;
    font-weight: 600;
    text-align: center;
    line-height: 1.5;
`;

// 추천 이유 타이틀
export const HeaderText = styled.div`
    border: 1px solid #5061ff;
    color: #5061ff;
    padding: 8px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-size: 15px;
    font-weight: 400;
    margin: 0px auto;
    border-radius: 30px;
`;

// 추천 이유
export const Reason = styled.div`
    font-size: 17px;
    font-weight: 500;
    padding: 20px 30px;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 10px;
`;

export const ExerciseBox = styled.div`
    background-color: white;
    margin: 0 auto 20px auto;
    width: 370px;
    border-radius: 20px;
    padding: 30px 20px 20px 20px;
`; 

// 운동명
export const ExerciseTitle = styled.div`
    font-size: 25px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
`;

// 시작 버튼
export const StartBtn = styled.div`
    font-size: 20px;
    text-align: center;
    padding: 15px;
    font-weight: 600;
    background: rgba(80, 97, 255, 0.10);
    color: #5061ff;
    width: 320px;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
`;