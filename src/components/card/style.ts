import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #fff;
  min-height: 50px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CardTitle = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const CardHr = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const BigCardContainer = styled.div`
  background-color: #fff;
  min-height: 250px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 20px;

  .content {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;

    .title {
      margin: 0;
      font-weight: bold;
    }

    .sub-title {
      margin-top: 10px;
      margin-bottom: 0;
    }

    hr {
      margin-bottom: 5px;
    }

    .learn-more-container {
      display: flex;
      justify-content: center;
      align-items: center;

      > p {
        font-weight: 500;
        margin: 0;
        color: #7791fb;
      }
    }
  }
`;

export const BigCardHeaderImage = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 50%;
  width: 100%;
`;
