import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  z-index: 100;
  overflow: hidden;
`;

export const HeaderTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 21px;
`;

export const HeaderBackIcon = styled.div`
  position: absolute;
  left: 20px;
  color: #7791fb;

  &:hover {
    cursor: pointer;
  }
`;
