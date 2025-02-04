import React from 'react'
import * as S from './Header.style';

function Header({ text }) {
  return (
    <S.Header>{text}</S.Header>
  )
}

export default Header