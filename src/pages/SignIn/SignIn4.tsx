import React from "react";
import * as S from "./SignIn.style.ts";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // axios import
import { useRecoilState, useRecoilValue } from 'recoil';
import { userIdAtom, passwordAtom, userNameAtom, userBirthAtom, userGenderAtom, userDisabilityAtom, userDisabilityRankAtom, userDisabilityDetailAtom, userExerciseExperienceAtom, userExercisePurposeAtom } from '../../recoil/SignInAtoms'; // Recoil atom import


function SignIn4() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useRecoilState(userExerciseExperienceAtom);
  const [exercisePurpose, setExercisePurpose] = useRecoilState(userExercisePurposeAtom); // 운동 목적을 저장하는 상태 추가
  const userId = useRecoilValue(userIdAtom);
  const userPassword = useRecoilValue(passwordAtom);
  const userName = useRecoilValue(userNameAtom);
  const userBirth = useRecoilValue(userBirthAtom);
  const userGender = useRecoilValue(userGenderAtom);
  const disability = useRecoilValue(userDisabilityAtom);
  const disability_rank = useRecoilValue(userDisabilityRankAtom);
  const disability_detail = useRecoilValue(userDisabilityDetailAtom);

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // 운동 경험 선택
  };

  const handlePurposeChange = (event) => {
    setExercisePurpose(event.target.value); // 운동 목적 입력값
  };

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
      formData.append("disability", disability);
      formData.append("disability_detail", disability_detail);
      formData.append("disability_rank", disability_rank);
      formData.append("exercise_experience", selectedOption);
      formData.append("exercise_purpose", exercisePurpose);

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

  return (
    <S.Component>
      <S.SignInTitle>
        본인의
        <br />
        운동 경험을 알려주세요.
      </S.SignInTitle>

      {/* 운동 경험 선택 */}
      <S.ObstacleType>
        <S.Select value={selectedOption} onChange={handleChange}>
          {[
            { value: "", label: "운동 경험을 선택해 주세요." },
            { value: "완전 없음", label: "완전 없음" },
            { value: "거의 없음", label: "거의 없음" },
            { value: "보통", label: "보통" },
            { value: "많음", label: "종종 많음" },
            { value: "매우 많음", label: "완전 많음" },
          ].map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.Select>
      </S.ObstacleType>

      {/* 운동 목적 입력 */}
      <S.SignInInput
        placeholder="운동 목적 (ex. 건강, 체력증진)"
        value={exercisePurpose}
        onChange={handlePurposeChange}
      />

      {/* 다음 버튼 */}
      <S.NextBtn onClick={onClickNextBtn}>다음</S.NextBtn>
    </S.Component>
  );
}

export default SignIn4;
