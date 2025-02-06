import styled from 'styled-components';

export const Component = styled.div`
    padding: 80px 0px;
`;

// 운동명 제목
export const HeaderText = styled.div`
    border: 1px solid #5061ff;
    color: #5061ff;
    padding: 8px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    font-size: 15px;
    font-weight: 400;
    margin: 20px auto 20px auto;
    border-radius: 30px;
`;

// 운동명
export const TimerStartTitle = styled.div`
    font-size: 35px;
    font-weight: 600;
    text-align: center;
`;

// 운동 정보
export const TimerStartText = styled.div`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin: 20px auto 50px auto;
    line-height: 1.5;
`;

// 시작하기 버튼
export const StartBtn = styled.div`
    background-color: white;
    border-radius: 200px;
    color: #5061ff;
    border: 3px solid #5061ff;
    padding: 100px 30px;
    font-size: 40px;
    font-weight: 600;
    width: 250px;
    height: 250px;
    text-align: center;
    margin: 0px auto;
    cursor: pointer;
    box-shadow: 0 0 10px 7px rgba(80, 97, 255, 0.1); /* 블러 효과 */
`;

// 운동 타이머 인트로
export const Intro = styled.div`
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin: 210px 0px;
    line-height: 1.5;

    animation: fadeOut 1s forwards; /* 3초 동안 서서히 사라짐 */
    animation-delay: 2s; /* 3초 뒤에 애니메이션 시작 */
    
    @keyframes fadeOut {
        0% {
        opacity: 1;
        }
        100% {
        opacity: 0;
        }
    }
`;

// 시작 전 3초 타이머
export const ThreeTimer = styled.div`
    font-size: 70px;
    font-weight: 600;
    text-align: center;
    margin: 230px 0px;
`;

// 세트 문구 박스
export const SetBox = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    padding-top: 10px;
    color: #5061ff;
`;

// 운동/쉬는시간 문구 박스
export const ExerciseBox = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    padding-top: 30px;
`;

// 원타이머
export const CircleTimer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 45px 0px;
`;

// 원 타이머 텍스트
export const TimeText = styled.div`
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  font-weight: 700;
`;

// 운동 타이머 종료
export const Finish = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: 70px 0px;
    line-height: 1.5;
`;

// 추천 의견 박스
export const ChoiceBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 버튼 스타일 정의
export const ChoiceButton = styled.button`
  background-color: ${(props) => (props.isSelected ? '#5061ff' : '#ffffff')};
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
  border: none;
  border-radius: 20px;
  padding: 5px 40px 10px 40px;
  font-size: 25px;
  line-height: 2;
  cursor: pointer;
  margin: 0 15px;
  font-weight: 600;
`;

// 종료하기 버튼
export const ExitBtn = styled.div`
    background-color: ${(props) => (props.isDisabled ? '#5061ff' : '#e1e1e1')};
    color: ${(props) => (props.isDisabled ? '#ffffff' : '#a9a9a9')};
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
    width: 350px;
    margin: 150px auto;
    transition: background-color 0.3s ease, color 0.3s ease;
`;

export const ExerciseName = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
    margin-top: -30px;
`;

export const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const QuizButton = styled.button`
  background-color: ${(props) => (props.isSelected ? '#ffcc00' : '#ffffff')};
  color: ${(props) => (props.isSelected ? '#ffffff' : '#000000')};
  border: 2px solid #5061ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 20px;
  font-weight: bold;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
`;

export const ResultText = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 30px;
  color: ${(props) => (props.correct ? 'green' : 'red')};
`;
