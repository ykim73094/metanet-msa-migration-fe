import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as S from './Exercise.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Exercise() {

  const navigation = useNavigate();

  const [reason, setReason] = useState("");
  const [exerciseName, setExerciseName] = useState("오늘의 시사경제 Quiz 시작하기");

  useEffect(() => {

    axios
      .get('/ftness/reco_model', {
        headers: {
          access: localStorage.getItem('access')
        },
        params: {
          user_id: localStorage.getItem('user_id')
        }, 
      })
      .then((response) => {
        // 데이터가 성공적으로 돌아오면 상태를 업데이트
        const data = response;
        console.log(response.data.reason);
      })
      .catch((error) => {
        console.error('데이터 로딩 실패:', error);
      });
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  // 시작하기 버튼 클릭 시
  function onClickStartBtn() {
    navigation('/timer-start', { state: { exerciseName } });
  }
  
  return (
    <div>
      <Header text={"맞춤형 운동 추천"}/>
      <S.Component>
        <S.HeaderTitle>{localStorage.getItem('user_id')}님을 위한 추천 운동이에요!</S.HeaderTitle>

        <S.ExerciseBox>
          <S.ExerciseTitle>초심자</S.ExerciseTitle>
          <S.Reason>이 운동은 사용자의 등과 팔 근육을 강화하는 데 효과적입니다. 사용자의 운동 목표가 건강 유지이기 때문에, 바벨 끌어당기기는 전신 근육을 효과적으로 활용하면서 체력을 향상시키는 데 도움이 될 것입니다.</S.Reason>
          <S.StartBtn onClick={onClickStartBtn}>시작하기</S.StartBtn>
        </S.ExerciseBox>

        <S.ExerciseBox>
          <S.ExerciseTitle>숙련자</S.ExerciseTitle>
          <S.Reason>이 운동은 사용자의 등과 가슴 근육을 강화하는 데 도움이 됩니다. 사용자의 지적장애 등급이 2등급이고 보통의 운동 경험이 있으므로, 이 운동은 적절한 강도와 안정성을 유지하면서 수행할 수 있는 운동입니다.</S.Reason>
          <S.StartBtn onClick={onClickStartBtn}>시작하기</S.StartBtn>
        </S.ExerciseBox>

        <S.ExerciseBox>
          <S.ExerciseTitle>전문가</S.ExerciseTitle>
          <S.Reason>파워클린은 전신 근육을 강화하고 근력과 평형을 향상시키는 데 도움이 됩니다. 사용자의 보통의 운동 경험을 고려할 때, 새로운 도전과 다양한 근육을 활용할 수 있는 파워클린은 사용자에게 적합한 운동입니다. 유연성을 유지하면서 안정적으로 운동을 수행해주세요.</S.Reason>
          <S.StartBtn onClick={onClickStartBtn}>시작하기</S.StartBtn>
        </S.ExerciseBox>
        <Footer/>
      </S.Component>
    </div>
  )
}

export default Exercise