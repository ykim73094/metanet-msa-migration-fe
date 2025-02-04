import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as S from './Footer.style';

function Footer() {

    const navigate = useNavigate();
    function onClickHome(){
        navigate('/main');
    }
  return (
    <S.Footer onClick={onClickHome}>
        홈으로 돌아가기
    </S.Footer>
  )
}

export default Footer