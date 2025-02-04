import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import * as S from './Insert.style';
import axios from 'axios';

function Insert() {
  // Options
  const options1 = [
    { value: "", label: "장애 유형을 선택하세요" },
    { value: "시각", label: "시각" },
    { value: "청각", label: "청각" },
    { value: "척수", label: "척수" },
    { value: "지적", label: "지적" },
    { value: "기타", label: "기타" },
  ];

  const options2 = [
    { value: "", label: "지역을 선택하세요" },
    { value: "서울특별시", label: "서울특별시" },
    { value: "부산광역시", label: "부산광역시" },
    { value: "대구광역시", label: "대구광역시" },
    { value: "인천광역시", label: "인천광역시" },
    { value: "광주광역시", label: "광주광역시" },
    { value: "대전광역시", label: "대전광역시" },
    { value: "울산광역시", label: "울산광역시" },
    { value: "세종특별자치시", label: "세종특별자치시" },
    { value: "경기도", label: "경기도" },
    { value: "강원도", label: "강원도" },
    { value: "충청북도", label: "충청북도" },
    { value: "충청남도", label: "충청남도" },
    { value: "전라북도", label: "전라북도" },
    { value: "전라남도", label: "전라남도" },
    { value: "경상북도", label: "경상북도" },
    { value: "경상남도", label: "경상남도" },
    { value: "제주특별자치도", label: "제주특별자치도" },
  ];

  // States
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');
  const [selectedOption5, setSelectedOption5] = useState('');
  const [selectedOption6, setSelectedOption6] = useState('');

  // Handlers
  const handleChange = (setter) => (event) => setter(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Axios POST request with params
      const response = await axios.post('/club/insert', null, {
        headers: {
          access: localStorage.getItem('access'), // Include access token
        },
        params: {
            trobl_ty_nm: selectedOption1,
            ctprvn_nm: selectedOption2,
            signgu_nm: selectedOption3,
            item_nm: selectedOption4,
            oper_time_cn: selectedOption5,
            nm: selectedOption6,
            intrcn_cn: '',
            host_index : localStorage.getItem('user_index'),
            host_id : localStorage.getItem('user_id')
        },
      });

      alert('동호회 모집글이 성공적으로 등록되었습니다!');
      navigate('/community');
    } catch (error) {
      console.error('Error:', error);
      alert('모집글 등록에 실패했습니다.');
    }
  };

  // 취소하기 버튼 클릭 시
  const navigate = useNavigate();
  function onClickCancelBtn(){
    navigate('/community');
  }

  return (
    <S.Component>
      <Header text={"동호회 모집글 작성"} />
      <S.Form onSubmit={handleSubmit}>
        <S.InsertTitle>STEP1</S.InsertTitle>
        {/* 장애 유형 선택 */}
        <S.SelectBox>
          <S.Select1 value={selectedOption1} onChange={handleChange(setSelectedOption1)}>
            {options1.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.Select1>
        </S.SelectBox>

        {/* 특별시, 도 선택 */}
        <S.SelectBox>
          <S.Select2 value={selectedOption2} onChange={handleChange(setSelectedOption2)}>
            {options2.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </S.Select2>
          <S.Select3
            placeholder="시/군/구"
            value={selectedOption3}
            onChange={handleChange(setSelectedOption3)}
          />
        </S.SelectBox>

        <S.SelectBox>
          <S.Select4
            placeholder="운동 유형 (ex. 축구, 검도)"
            value={selectedOption4}
            onChange={handleChange(setSelectedOption4)}
          />
        </S.SelectBox>

        <S.SelectBox>
          <S.Select4
            placeholder="동호회 시간"
            value={selectedOption5}
            onChange={handleChange(setSelectedOption5)}
          />
        </S.SelectBox>

        <S.InsertTitle>STEP2</S.InsertTitle>
        <S.SelectBox>
          <S.Select5
            placeholder="글 내용을 작성해 주세요"
            value={selectedOption6}
            onChange={handleChange(setSelectedOption6)}
          />
        </S.SelectBox>

        <S.SubmitButton onClick={handleSubmit}>등록하기</S.SubmitButton>
        <S.CancleButton onClick={onClickCancelBtn}>취소하기</S.CancleButton>
      </S.Form>
    </S.Component>
  );
}

export default Insert;
