import React from 'react'
import * as S from './SignIn.style.ts';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userIdAtom, passwordAtom } from '../../recoil/SignInAtoms'; // Recoil atom import

function SignIn1() {

    const navigate = useNavigate();
    // Recoil 상태 사용
    const [userId, setUserId] = useRecoilState(userIdAtom);
    const [password, setPassword] = useRecoilState(passwordAtom);

    // 닉네임 변경 처리
    function handleUserIdChange(event) {
      setUserId(event.target.value);
    }

    // 비밀번호 변경 처리
    function handlePasswordChange(event) {
      setPassword(event.target.value);
    }

    // 다음 버튼 클릭 시
    function onClickNextBtn(){
        navigate('/signin-2');
    }

  return (
    <S.Component>
        <S.SignInTitle>반가워요! 👋🏻<br/>사용하실 닉네임과<br/>비밀번호를 입력해 주세요.</S.SignInTitle>
        <S.SignInInput placeholder="닉네임" value={userId} onChange={handleUserIdChange}></S.SignInInput>
        <S.SignInInput1 type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange}></S.SignInInput1>
        <S.SignInInput2 type="password" placeholder="비밀번호를 한 번 더 입력해 주세요"></S.SignInInput2>
        <S.NextBtn onClick={onClickNextBtn}>다음</S.NextBtn>
    </S.Component>
  )
}

export default SignIn1