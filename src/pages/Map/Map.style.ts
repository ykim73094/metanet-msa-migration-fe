import styled from 'styled-components';

export const MapTitle = styled.div`
    padding: 20px 20px 0px 20px;
    font-size: 20px;
    line-height: 1.5;
`;

// 지도 컨테이너
export const MapContainer = styled.div`
    padding-top: 10px;
    position: relative;
`;

// 현위치 이동 버튼
export const LoctionBtn = styled.img`
    position: absolute;
    top: 80%;
    right: 2%;
    z-index: 3;
    cursor: pointer;
`;

export const SpotBox = styled.div`
    margin: 20px auto 0px auto;
    width: 380px;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
`;

export const Region = styled.div`
    display: inline;
    color: white;
    background-color: #ffceed;
    color: #353535;
    border-radius: 20px;
    padding: 7px 13px;
    font-weight: 600;
    font-size: 17px;
    margin: 0px 5px 0px auto;
`;

export const Select = styled.div`
    display: inline;
    color: white;
    background-color: ${props => props.selected ? '#5061ff' : '#ccc'};
    border-radius: 20px;
    padding: 10px 15px;
    font-weight: 600;
    font-size: 18px;
    margin: 0px 5px;
    cursor: pointer;
`;

export const NoneSpot = styled.div`
    text-align: center;
    line-height: 1.3;
    font-size: 22px;
    font-weight: 600;
    padding: 30px 0px 0px 0px;
`;