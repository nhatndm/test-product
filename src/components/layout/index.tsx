import React, { ReactNode } from 'react';

// LAYOUT
import { Header } from './header';
import { Footer } from './footer';

interface IProps {
  showBackIcon?: boolean;
  headerTitle?: string;
  children: ReactNode;
}

export const Layout = ({ showBackIcon, headerTitle, children }: IProps) => {
  return (
    <>
      <Header showBackIcon={showBackIcon} headerTitle={headerTitle} />
      {children}
      <Footer />
    </>
  );
};
