import styled from 'styled-components';

export const MapElement = styled.div`
  height: 100vh;
`;

export const MapContainer = styled.div`
  height: 100%;
`;

export const LoadingElement = styled.div`
  height: 100%;
  background: #fff;
`;

export const ConfirmButton = styled.div`
  position: absolute;
  height: 50px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #7791fb;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  p {
    margin: 0;
    font-weight: bold;
  }
`;
