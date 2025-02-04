import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from './Main.style';
import { ReactComponent as ArrowIcon } from '../../assets/ArrowIcon.svg';

function Main() {

  const navigate = useNavigate();

  function onClickMenu1(){
    navigate('/exercise');
  }

  function onClickMenu2(){
    navigate('/map');
  }

  function onClickMenu3(){
    navigate('/community');
  }

  return (
    <div>
      <S.Header>

      </S.Header>

      <S.SubHeader>
        <S.HeaderText1>안녕하세요! {localStorage.getItem('user_id')}님,</S.HeaderText1>
        <S.HeaderText2>원하시는 서비스를 확인해 주세요.</S.HeaderText2>
      </S.SubHeader>

      <S.MainContainer>
        <S.Service1 onClick={onClickMenu1}>
          <S.ServiceTitle>맞춤형 운동 추천</S.ServiceTitle>
          <S.ServiceText>사용자 정보를 바탕으로 맞춤형 운동을<br/>추천받을 수 있어요.</S.ServiceText>
          <S.ServiceIcon><ArrowIcon/></S.ServiceIcon>
        </S.Service1>

        <S.Service3 onClick={onClickMenu2}>
          <S.ServiceTitle>운동 프로그램 위치</S.ServiceTitle>
          <S.ServiceText>공공/사설에서 운영하는 운동프로그램<br/>위치를 검색할 수 있어요.</S.ServiceText>
          <S.ServiceIcon><ArrowIcon/></S.ServiceIcon>
        </S.Service3>

        <S.Service2 onClick={onClickMenu3}>
          <S.ServiceTitle>운동 동호회</S.ServiceTitle>
          <S.ServiceText>다양한 사람들과 같이 즐길 수 있는<br/>운동 동호회를 모집하고 찾을 수 있어요.</S.ServiceText>
          <S.ServiceIcon><ArrowIcon/></S.ServiceIcon>
        </S.Service2>
      </S.MainContainer>
    </div>
  )
}

export default Main