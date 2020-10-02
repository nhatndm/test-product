import React, { ReactNode } from 'react';

import {
  CardContainer,
  CardTitle,
  CardHr,
  BigCardHeaderImage,
  BigCardContainer,
} from './style';

interface TProps {
  title?: string;
  children: ReactNode;
}

interface TPropsBigCard {
  urlHeader?: string;
  title: string;
  subTitle: string;
}

export const Card = ({ title, children }: TProps) => {
  return (
    <CardContainer>
      {title && (
        <>
          <CardTitle>{title}</CardTitle>
          <CardHr />
        </>
      )}
      {children}
    </CardContainer>
  );
};

export const BigCard = ({ urlHeader, title, subTitle }: TPropsBigCard) => {
  return (
    <BigCardContainer>
      {urlHeader && <BigCardHeaderImage src={urlHeader} />}
      <div className='content'>
        <p className='title'>{title}</p>
        <p className='sub-title'>{subTitle}</p>
        <hr />
        <div className='learn-more-container'>
          <p>Learn More</p>
        </div>
      </div>
    </BigCardContainer>
  );
};
