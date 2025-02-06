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
        <Header text={"오늘의 금융 Quiz"}/>
        <S.Component>
            <S.HeaderText>★</S.HeaderText>
            <S.TimerStartTitle>{exerciseName}</S.TimerStartTitle>
            <S.TimerStartText>
                한문제당 <text style={{color:"#5061ff"}}>7초</text>, 쉬는시간 <text style={{color:"#5061ff"}}>3번</text>씩 <text style={{color:"#5061ff"}}>3문제가</text> 출제됩니다.<br/>
                시작하기 버튼을 누르면, <br/><text style={{color:"#5061ff"}}>3초 뒤 타이머가 시작</text>됩니다.
            </S.TimerStartText>
            <S.StartBtn onClick={onClickStartBtn}>시작하기</S.StartBtn>
        </S.Component>
        <Footer/>
    </div>
  )
}

export default TimerStart