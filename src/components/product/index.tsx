import React, { ReactNode } from 'react';

// STYLE
import {
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductsContainer,
} from './style';

// INTERFACE
import { ProductItem } from '../../interface';

interface TProps {
  title: string;
  url: string;
  className?: string;
}

export const Product = ({ title, url, className }: TProps) => {
  return (
    <ProductContainer className={className}>
      <ProductImage src={url} />
      <ProductTitle>{title}</ProductTitle>
    </ProductContainer>
  );
};

export const Products = ({
  products,
  forCollapsed,
}: {
  products: ProductItem[];
  forCollapsed?: boolean;
}) => {
  const productsLength = products.length;
  let parentNode: ReactNode[] = [];
  let childNode: ReactNode[] = [];

  if (productsLength === 0) return null;

  const generateNode = (length: number, products: ProductItem[]) => {
    for (let i = 0; i < length; i++) {
      const item = products[i];

      if (i % 3 === 0) {
        childNode = [];
        childNode.push(
          <Product
            key={item.id}
            title={item.title}
            url={item.image}
            className='col-4'
          />,
        );
        parentNode.push(
          <ProductsContainer key={`parent-${item.id}`} className='row'>
            {childNode}
          </ProductsContainer>,
        );
      }

      if (i % 3 !== 0) {
        childNode.push(
          <Product
            key={item.id}
            title={item.title}
            url={item.image}
            className='col-4'
          />,
        );
      }
    }

    return <>{parentNode}</>;
  };

  if (!forCollapsed) {
    return generateNode(6, products);
  }

  return generateNode(productsLength, products);
};
