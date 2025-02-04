import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './Community.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ReactComponent as InsertBtn } from '../../assets/InsertBtn.svg';
import { ReactComponent as Time } from '../../assets/Time.svg';
import { ReactComponent as Running } from '../../assets/Running.svg';

function Community() {
  const navigate = useNavigate();

  // 동호회 리스트 상태 변수
  const [clubList, setClubList] = useState([]);

  // 동호회 리스트 조회 API 호출
  useEffect(() => {
    axios
      .get('/club/list', {
        headers: {
          access: localStorage.getItem('access'),
        },
        params: {
          limit: 50,
          offset: 20,
        },
      })
      .then((response) => {
        // 데이터가 성공적으로 돌아오면 상태를 업데이트
        const data = response.data;
        console.log(data);
        setClubList(data); // 데이터 저장
        //console.log(typeof data);
      })
      .catch((error) => {
        console.error('데이터 로딩 실패:', error);
      });
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  // 등록 버튼 클릭 시
  function onClickInsertBtn() {
    navigate('/community-insert');
  }

  return (
    <S.Component>
      <Header text={"운동 동호회"} />

      {/* 동호회 리스트 출력 */}
      <S.ListContainer>
        {Array.isArray(clubList) && clubList.length > 0 ? (
            clubList.map((club, index) => (
            <S.ListItem key={index}>
              <div style={{fontSize:'17px', fontWeight:'600', color:'#5061ff', marginBottom:'10px'}}>{club.ctprvn_nm}</div>
              <div style={{fontSize:'20px', fontWeight:'600', marginBottom:'20px'}}>{club.nm}</div>
              <div style={{display: 'flex'}}><Time/><div style={{fontSize:'17px', fontWeight:'500', marginTop:'2px', marginBottom:'15px', marginLeft:'10px'}}>{club.oper_time_cn}</div></div>
              <div style={{display: 'flex'}}><Running/><div style={{fontSize:'17px', fontWeight:'500', marginTop:'2px', marginLeft:'10px'}}>{club.item_nm}</div></div>
            </S.ListItem>
          ))
        ) : (
          <p>동호회 목록을 불러오는 중입니다...</p>
        )}
      </S.ListContainer>

      {/* 등록 버튼 */}
      <S.InsertBtn onClick={onClickInsertBtn}>
        <InsertBtn />
      </S.InsertBtn>

      <Footer />
    </S.Component>
  );
}

export default Community;
