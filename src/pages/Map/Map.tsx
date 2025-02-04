import React, { useState, useEffect, useMemo } from 'react';
import * as S from './Map.style';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LocationBtn from '../../assets/LocationBtn.svg'; // 현위치 버튼
import Marker from '../../assets/Marker.svg'; // 현위치 아이콘
import { Map as KakaoMap, useMap, MapMarker } from 'react-kakao-maps-sdk';
import debounce from 'lodash/debounce';
import Papa from 'papaparse';

const { kakao } = window;

const EventMarkerContainer = ({ position, info, onMarkerClick }) => {
  const map = useMap();

  useEffect(() => {
    const markerPosition = new kakao.maps.LatLng(position.lat, position.lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      map: map,
    });

    const handleMarkerClick = () => {
      map.panTo(marker.getPosition());
      onMarkerClick(info); // 클릭 시 정보를 상위 컴포넌트로 전달
      console.log(info);
    };

    kakao.maps.event.addListener(marker, 'click', handleMarkerClick);

    return () => {
      marker.setMap(null);
    };
  }, [map, position, info, onMarkerClick]);

  return null; // 마커는 DOM에 표시되지 않으므로 null 반환
};

function Map() {
  const [center, setCenter] = useState({ lat: null, lng: null });
  const [position, setPosition] = useState({ lat: null, lng: null });
  const [address, setAddress] = useState('');
  const [data, setData] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null); // 선택된 스팟 정보 상태 추가
  const [selectedOption, setSelectedOption] = useState('운동 프로그램'); // 선택된 옵션 상태 추가

  useEffect(() => {
    const csvFilePath = selectedOption === '베리어프리' 
      ? '/for_react_only_seoul.csv' 
      : '/voucher_spot.csv';

    fetch(csvFilePath)
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            const parsedData = result.data.map(row => {
              if (selectedOption === '베리어프리') {
                return {
                  alsfc_nm: row.facility_name, // 시설 이름
                  alsfc_main_item_nm: row.category2, // 카테고리
                  latlng: { lat: parseFloat(row.latitude), lng: parseFloat(row.longitude) }, // 위도, 경도
                  alsfc_addr: row.land_lot_address, // 주소
                  alsfc_rprsntv_tel_no: row.phone_number, // 전화번호
                  alsfc_operating_hours: row.operating_hours, // 운영 시간
                };
              } else {
                return {
                  alsfc_ctprvn_nm: row.alsfc_ctprvn_nm,
                  alsfc_nm: row.alsfc_nm,
                  alsfc_addr: row.alsfc_addr,
                  latlng: { lat: parseFloat(row.alsfc_la), lng: parseFloat(row.alsfc_lo) },
                  alsfc_rprsntv_tel_no: row.alsfc_rprsntv_tel_no,
                  alsfc_detail_addr: row.alsfc_detail_addr,
                  alsfc_main_item_nm: row.alsfc_main_item_nm,
                };
              }
            });
            setData(parsedData);
          }
        });
      });
  }, [selectedOption]); // selectedOption이 변경될 때마다 실행

  useEffect(() => {
    const handlePosition = (pos) => {
      const { latitude, longitude } = pos.coords;
      setCenter({ lat: latitude, lng: longitude });
      setPosition({ lat: latitude, lng: longitude });
      getAddressFromCoords(latitude, longitude); // 주소 가져오기
    };

    const handleError = (error) => {
      console.error('위치 정보를 가져오는 데 실패했습니다:', error);
      alert('실시간 위치 정보를 활성화 해주세요.');
    };

    navigator.geolocation.getCurrentPosition(handlePosition, handleError);
    const watchId = navigator.geolocation.watchPosition(handlePosition, handleError);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const getAddressFromCoords = (latitude, longitude) => {
    const geocoder = new kakao.maps.services.Geocoder();
    const coord = new kakao.maps.LatLng(latitude, longitude);

    geocoder.coord2Address(coord.getLng(), coord.getLat(), (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const addressName = result[0].address.address_name;
        setAddress(addressName); // 주소 상태 업데이트
      }
    });
  };

  const setCenterToMyPosition = () => {
    setCenter(position);
  };

  const updateCenterWhenMapMoved = useMemo(
    () => debounce((map) => {
      const newCenter = map.getCenter();
      const latitude = newCenter.getLat();
      const longitude = newCenter.getLng();
      setCenter({ lat: latitude, lng: longitude });
    }, 500),
    []
  );

  return (
    <div>
      <Header text="운동 프로그램 위치" />
      <div style={{ display: 'flex', padding: '80px 0px 0px 20px' }}>
        <S.Select
          onClick={() => setSelectedOption('운동 프로그램')}
          selected={selectedOption === '운동 프로그램'}
        >
          운동 프로그램
        </S.Select>
        <S.Select
          onClick={() => setSelectedOption('베리어프리')}
          selected={selectedOption === '베리어프리'}
        >
          베리어프리
        </S.Select>
      </div>
      <S.MapTitle>
        {selectedOption === '베리어프리' ? (
          <>
            <text style={{ fontSize: '25px', fontWeight: '600' }}>{address}</text>
            <br />
            중심으로 베리어프리 장소를 찾았어요!
          </>
        ) : (
          <>
            {address ? (
              <>
                <text style={{ fontSize: '25px', fontWeight: '600' }}>{address}</text>
                <br />
                중심으로 이용권 사용가능한 시설을 찾았어요!
              </>
            ) : (
              '주소를 가져오는 중입니다!'
            )}
          </>
        )}
      </S.MapTitle>
      <S.MapContainer>
        <KakaoMap
          id="map"
          center={center}
          style={{ width: '100%', height: '370px' }}
          level={4}
          onCenterChanged={updateCenterWhenMapMoved}
        >
          <MapMarker
            image={{
              src: Marker,
              size: { width: 30, height: 30 },
            }}
            position={position}
          />
          {data.map((item, index) => (
            <EventMarkerContainer
              key={index}
              position={item.latlng}
              info={item} // 마커에 해당하는 정보 전달
              onMarkerClick={() => setSelectedSpot(item)} // 마커 클릭 시 상태 업데이트
            />
          ))}
        </KakaoMap>
        <S.LoctionBtn src={LocationBtn} onClick={setCenterToMyPosition} />
      </S.MapContainer>
      <div style={{ paddingBottom: '120px' }}>
        {selectedSpot ? (
          <S.SpotBox>
            <div style={{ display: 'flex' }}>
              <div style={{ fontWeight: '700', fontSize: '22px', marginTop: '6px' }}>{selectedSpot.alsfc_nm}</div>
              <S.Region>{selectedSpot.alsfc_main_item_nm}</S.Region>
            </div>
            <div style={{ fontSize: '17px', marginTop: '13px' }}>{selectedSpot.alsfc_addr}</div>
            <div style={{ fontSize: '17px', marginTop: '8px' }}>{selectedSpot.alsfc_detail_addr}</div>
            <div style={{ fontSize: '17px', marginTop: '8px' }}>전화번호 | {selectedSpot.alsfc_rprsntv_tel_no}</div>
            {selectedSpot.alsfc_operating_hours && (
              <div style={{ fontSize: '17px', marginTop: '8px' }}>운영시간 | {selectedSpot.alsfc_operating_hours}</div>
            )}
          </S.SpotBox>
        ) : (
          <S.NoneSpot>지도 위 마커를 클릭하면<br />정보가 출력돼요!</S.NoneSpot>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Map;
