import React from 'react'
import * as S from './Start.style';
import MetaIcon from '../../assets/metanet.png';
import iPhone15 from '../../assets/iPhone15.png';
import { useNavigate } from 'react-router-dom';

function Start() {

    const navigate = useNavigate();

    // 로그인 버튼 클릭 시
    function onClickLoginBtn(){
      navigate('/login');
    }

    // 회원가입 버튼 클릭 시
    function onClickSigninBtn(){
      navigate('/signin-1');
    }

  return (
    <div>
      <S.ServiceText>Metanet 최종발표<br/>장경빈 곽동현 김연우 유병민</S.ServiceText>
      <S.ImageBox><img src={MetaIcon} alt="meta"/></S.ImageBox>
      <S.LoginBtn onClick={onClickLoginBtn}>로그인</S.LoginBtn>
      <S.SigninBtn onClick={onClickSigninBtn}>회원가입</S.SigninBtn>
    </div>
  )
}

export default Start