import React, { useState, ReactNode } from 'react';

// STYLE
import { FooterContainer, FooterItemContainer } from './style';

// ICON
import { ReactComponent as Account } from '../../../assets/images/account_inactive.svg';
import { ReactComponent as AccountActive } from '../../../assets/images/account.svg';

import { ReactComponent as Home } from '../../../assets/images/home_inactive.svg';
import { ReactComponent as HomeActive } from '../../../assets/images/home.svg';

import { ReactComponent as Inbox } from '../../../assets/images/inbox_inactive.svg';
import { ReactComponent as InboxActive } from '../../../assets/images/inbox.svg';

import { ReactComponent as MyJobs } from '../../../assets/images/myjobs_inactive.svg';
import { ReactComponent as MyJobsActive } from '../../../assets/images/myjobs.svg';

import { ReactComponent as Support } from '../../../assets/images/support_inactive.svg';
import { ReactComponent as SupportActive } from '../../../assets/images/support.svg';

interface FooterItem {
  id: number;
  activeId: number;
  onClick: (id: number) => void;
  activeIcon: ReactNode;
  deactiveIcon: ReactNode;
  title: string;
}

const items = [
  {
    id: 1,
    title: 'Home',
    deactiveIcon: <Home width={30} height={30} />,
    activeIcon: <HomeActive width={30} height={30} />,
  },
  {
    id: 2,
    title: 'MyJobs',
    deactiveIcon: <MyJobs width={30} height={30} />,
    activeIcon: <MyJobsActive width={30} height={30} />,
  },
  {
    id: 3,
    title: 'Support',
    deactiveIcon: <Support width={30} height={30} />,
    activeIcon: <SupportActive width={30} height={30} />,
  },
  {
    id: 4,
    title: 'News',
    deactiveIcon: <Inbox width={30} height={30} />,
    activeIcon: <InboxActive width={30} height={30} />,
  },
  {
    id: 5,
    title: 'Account',
    deactiveIcon: <Account width={30} height={30} />,
    activeIcon: <AccountActive width={30} height={30} />,
  },
];

const FooterItem = ({
  id,
  activeId,
  onClick,
  activeIcon,
  deactiveIcon,
  title,
}: FooterItem) => {
  return (
    <FooterItemContainer onClick={() => onClick(id)}>
      {id === activeId ? activeIcon : deactiveIcon}
      <p className={`title ${id === activeId ? 'active' : ''}`}>{title}</p>
    </FooterItemContainer>
  );
};

export const Footer = () => {
  const [activeItem, setActiveItem] = useState<number>(1);

  return (
    <FooterContainer>
      {items.map((v) => {
        return (
          <FooterItem
            key={v.id}
            id={v.id}
            title={v.title}
            activeId={activeItem}
            onClick={(id) => setActiveItem(id)}
            activeIcon={v.activeIcon}
            deactiveIcon={v.deactiveIcon}
          />
        );
      })}
    </FooterContainer>
  );
};
