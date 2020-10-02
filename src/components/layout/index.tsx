import React, { ReactNode } from 'react';

// LAYOUT
import { Header } from './header';
import { Footer } from './footer';

interface IProps {
  showBackIcon?: boolean;
  headerTitle?: string;
  children: ReactNode;
  showFooter?: boolean;
}

export const Layout = ({
  showBackIcon,
  headerTitle,
  children,
  showFooter,
}: IProps) => {
  return (
    <>
      <Header showBackIcon={showBackIcon} headerTitle={headerTitle} />
      {children}
      {showFooter && <Footer />}
    </>
  );
};
