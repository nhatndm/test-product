import styled from 'styled-components';

export const HomepageContainer = styled.div`
  padding-top: 60px;
`;

export const HomePageHeaderImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 135px;
`;

export const HomePageContent = styled.div`
  top: 60px;
  position: absolute;
  left: 0px;
  right: 0px;
`;

export const InnerHomePageContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

export const HomePageHeaderTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 20px;
`;

export const MapInput = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  width: 250px;
  background-color: rgba(240, 232, 175, 0.8);
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .point-icon {
    position: absolute;
    left: 5px;
    top: 3px;
  }

  .title {
    margin: 0;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const WhatNewContainer = styled.div`
  padding-left: 20px;
  margin-bottom: 100px;
  padding-right: 20px;
`;

export const SliderContainer = styled.div`
  margin-top: 20px;
`;
