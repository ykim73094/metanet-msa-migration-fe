import styled from 'styled-components';

// 헤더
export const Header = styled.div`
    background-color: white;
    padding: 20px 15px;
`;

// 서브 헤더
export const SubHeader = styled.div`
    margin-top: 40px;
    padding: 0px 30px;
    color: #161616;
`;

// 안녕하세요, 사용자님
export const HeaderText1 = styled.div`
    font-size: 20px;
`;

// 원하시는 서비스를 선택해 주세요
export const HeaderText2 = styled.div`
    font-size: 35px;
    margin-top: 10px;
    line-height: 1.3;
    font-weight: 600;
`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2열 구조 */
    grid-template-rows: auto auto; /* 행 자동 조정 */
    gap: 20px; /* 간격 */
    padding: 30px;
    max-width: 1100px;
    margin: auto;
`;

// 맞춤형 운동추천
export const Service1 = styled.div`
    background-color: white;
    padding: 100px 20px 100px 30px;
    border-radius: 25px;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0 0 10px 7px rgba(80, 97, 255, 0.05); /* 블러 효과 */
    //grid-column: 1; /* 첫 번째 열 */
    //grid-row: span 2; /* 두 개의 행을 차지 */
    //width: 100%;
    //height: 150px; /* 기존 250px → 320px으로 증가 */
    //display: flex;
    //align-items: center;
    //justify-content: center;
`;


// 운동 동호회 추천
export const Service2 = styled.div`
    background-color: white;
    padding: 100px 20px 20px 15px;
    border-radius: 25px;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0 0 10px 7px rgba(80, 97, 255, 0.05); /* 블러 효과 */
`;

// 지도 사설 정보 제공
export const Service3 = styled.div`
    background-color: white;
    padding: 20px 20px 20px 40px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 0 10px 7px rgba(80, 97, 255, 0.05); /* 블러 효과 */
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    grid-column: 1 / span 2; /* 2칸을 차지하도록 변경 */
    grid-row: 2;
    width: 100%;
    max-width: 1100px; /* 최대 너비 증가 */
    min-height: 400px; /* 기존 150px → 180px 증가 */
    display: flex;
    align-items: center;
    justify-content: center;
`;

// 서비스명
export const ServiceTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    padding: 10px 10px 0px 10px;
`;

// 서비스 설명
export const ServiceText = styled.div`
    font-size: 17px;
    font-weight: 300;
    padding: 10px 0px 0px 10px;
    line-height: 1.3;
`;

export const ServiceIcon = styled.div`
    background-color: #F7F8FF;
    border-radius: 30px;
    width: 53px;
    height: 53px;
    margin: -50px 0px 0px auto;
    padding: 10px 12px;
`;