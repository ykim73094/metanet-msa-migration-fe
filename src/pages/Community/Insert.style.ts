import styled from 'styled-components';

export const Component = styled.div`
    height: 100hv;
    background-color: #F7F8FF;
`;
export const Form = styled.div`
    padding: 70px 0px 40px 0px;
`;

export const InsertTitle = styled.div`
    font-size: 25px;
    font-weight: 700;
    padding: 20px 25px;
`;

export const SelectBox = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 10px 20px;
`;

// 장애유형 선택 박스
export const Select1 = styled.select`
  width: 100%;
  border: 2px solid #5061ff;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  appearance: none; /* 기본 화살표 제거 */
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%235061FF'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")
    no-repeat right 10px center;
  background-color: #fff;
  background-size: 30px;
  width: 360px;

  &:focus {
    outline: none;
    border-color: #4050d8;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;


// 특별시/도 선택 박스
export const Select2 = styled.select`
  width: 100%;
  border: 2px solid #5061ff;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  appearance: none; /* 기본 화살표 제거 */
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%235061FF'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")
    no-repeat right 10px center;
  background-color: #fff;
  background-size: 30px;
  width: 190px;

  &:focus {
    outline: none;
    border-color: #4050d8;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

// 시군구 작성 박스
export const Select3 = styled.input`
  width: 100%;
  margin-left: 20px;
  border: 2px solid #5061ff;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  background-size: 30px;
  width: 150px;

  &:focus {
    outline: none;
    border-color: #4050d8;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

// 운동 유형/동호회 시간 작성 박스
export const Select4 = styled.input`
  width: 100%;
  border: 2px solid #5061ff;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  background-size: 30px;
  width: 360px;
  margin-left: 0px;

  &:focus {
    outline: none;
    border-color: #4050d8;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

// 글 내용 작성 박스
export const Select5 = styled.textarea`
  width: 100%;
  border: 2px solid #5061ff;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  background-size: 30px;
  width: 400px;
  height: 300px;
  margin-left: 0px;

  &:focus {
    outline: none;
    border-color: #4050d8;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`;

export const SubmitButton = styled.div`
  cursor: pointer;
  margin: 30px auto 0px auto;
  background-color: #5061ff;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 20px 10px; 
  width: 380px;
  border-radius: 20px;
`;

export const CancleButton = styled.div`
  cursor: pointer;
  margin: 10px auto;
  color: #5061ff;
  border: 3px solid #5061ff;
  background-color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 20px 10px; 
  width: 380px;
  border-radius: 20px;
  margin: 10px auto;
`;