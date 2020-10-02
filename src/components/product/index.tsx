import React from 'react';

// STYLE
import { ProductContainer, ProductImage, ProductTitle } from './style';

interface TProps {
  title: string;
  url: string;
}

export const Product = ({ title, url }: TProps) => {
  return (
    <ProductContainer>
      <ProductImage src={url} />
      <ProductTitle>{title}</ProductTitle>
    </ProductContainer>
  );
};
