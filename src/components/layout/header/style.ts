import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
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
