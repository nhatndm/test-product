import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 65px;
  border-top: 1px solid #ccc;
  background-color: #fff;
  z-index: 1000;
`;

export const FooterItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: #6c757d;

  .title {
    margin: 0;
    font-size: 14px;
    font-weight: bold;

    &.active {
      color: #7791fb;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;
