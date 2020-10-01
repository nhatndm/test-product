import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// STYLE
import { HeaderContainer, HeaderTitle, HeaderBackIcon } from './style';

interface IProps {
  showBackIcon?: boolean;
  headerTitle?: string;
}

export const Header = ({ showBackIcon, headerTitle }: IProps) => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <HeaderContainer>
      {headerTitle && <HeaderTitle>{headerTitle}</HeaderTitle>}
      {showBackIcon && (
        <HeaderBackIcon onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} size='2x' />
        </HeaderBackIcon>
      )}
    </HeaderContainer>
  );
};
