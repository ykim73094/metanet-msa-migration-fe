import React from 'react'
import * as S from './Timer.style';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useRecoilState } from 'recoil';
import { ExerciseNameAtom } from '../../recoil/ExerciseAtoms';

function TimerStart() {

    const location = useLocation();
    const navigate = useNavigate();
    const { exerciseName } = location.state || {};
    const [exercise, setExercise] = useRecoilState(ExerciseNameAtom);

    function onClickStartBtn(){
      setExercise(exerciseName);
      navigate('/timer');
    }

  return (
    <div>
        <Header text={"Quiz"}/>
        <S.Component>
            <S.HeaderText>운동명</S.HeaderText>
            <S.TimerStartTitle>{exerciseName}</S.TimerStartTitle>
            <S.TimerStartText>
                한세트당 <text style={{color:"#5061ff"}}>1분</text>, 쉬는시간 <text style={{color:"#5061ff"}}>20초</text>씩 <text style={{color:"#5061ff"}}>3세트</text> 진행합니다.<br/>
                시작하기 버튼을 누르면, <br/><text style={{color:"#5061ff"}}>3초 뒤 운동 타이머가 시작</text>됩니다.
            </S.TimerStartText>
            <S.StartBtn onClick={onClickStartBtn}>시작하기</S.StartBtn>
        </S.Component>
        <Footer/>
    </div>
  )
}

export default TimerStart