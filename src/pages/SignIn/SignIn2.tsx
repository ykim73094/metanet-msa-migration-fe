import React from "react";
import * as S from './SignIn.style.ts';
import { useNavigate } from 'react-router-dom';
import {useRecoilState, useRecoilValue} from 'recoil';
import {userNameAtom, userBirthAtom, userGenderAtom, userIdAtom, passwordAtom} from '../../recoil/SignInAtoms'; // Recoil atom import
import axios from "axios"; // axios import

function SignIn2() {

  const navigate = useNavigate();
  // Recoil 상태 사용
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [userBirth, setUserBirth] = useRecoilState(userBirthAtom);
  const userId = useRecoilValue(userIdAtom);
  const userPassword = useRecoilValue(passwordAtom);
  const userGender = useRecoilValue(userGenderAtom);

  // 이름 변경 처리
  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  // 생년월일 변경 처리
  function handleUserBirthChange(event) {
    setUserBirth(event.target.value); // Date 객체를 Recoil 상태에 저장
  }

  // 다음 버튼 클릭 시 실행
  const onClickNextBtn = async () => {
    try {
      const formData = new FormData();

      // FormData 객체에 데이터 추가
      formData.append("id", userId);
      formData.append("password", userPassword);
      formData.append("email", `${userId}@naver.com`);
      formData.append("birthday", userBirth);
      formData.append("name", userName);
      formData.append("gender", userGender);
      formData.append("disability", "disability");
      formData.append("disability_detail", "disability_detail");
      formData.append("disability_rank", "disability_rank");
      formData.append("exercise_experience", "selectedOption");
      formData.append("exercise_purpose", "exercisePurpose");

      axios
          .post('/user/sign_up', formData)
          .then(() => {
            // 성공적으로 전송되었으면 다음 페이지로 이동
            navigate("/signin-5");
          })
    } catch (error) {
      console.error("API 호출 실패:", error.response?.data || error.message);
    }
  };

  // 활성화된 버튼 상태 관리 (남자: "male", 여자: "female")
  const [activeGender, setActiveGender] = useRecoilState(userGenderAtom);

  const toggleGender = (gender) => {
    setActiveGender((prevGender) => (prevGender === gender ? "" : gender));
  };

  return (
    <S.Component>
        <S.SignInTitle>본인의 정보를 입력해 주세요.</S.SignInTitle>
        <S.SignInInput placeholder="이름" value={userName} onChange={handleUserNameChange}></S.SignInInput>
        <S.SignInInput placeholder="생년월일 (2000-00-00)" value={userBirth} onChange={handleUserBirthChange}></S.SignInInput>
        <S.GenderBtnBox>
          <S.GenderBtn1
            isActive={activeGender === "M"}
            onClick={() => toggleGender("M")}
          >
            남자
          </S.GenderBtn1>
          <S.GenderBtn2
            isActive={activeGender === "F"}
            onClick={() => toggleGender("F")}
          >
            여자
          </S.GenderBtn2>
        </S.GenderBtnBox>
        <S.NextBtn onClick={onClickNextBtn}>다음</S.NextBtn>
    </S.Component>
  )
}

export default SignIn2