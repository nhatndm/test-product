import React, { useState } from 'react';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';

// COMPONENT
import { Card, BigCard } from '../../components/card';
import { Product } from '../../components/product';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// STYLE
import {
  HomepageContainer,
  HomePageHeaderImg,
  HomePageHeaderTitle,
  HomePageContent,
  MapInput,
  FeaturedContainer,
  InnerHomePageContent,
  WhatNewContainer,
  SliderContainer,
} from './style';

// HEADER
import HomeHeader from '../../assets/images/homeHeader.svg';
import Point from '../../assets/images/point.svg';

interface TProps {
  address: string;
}

export const HomePage = ({ address }: TProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const history = useHistory();
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const generateGreeting = (): string => {
    if (currentHour < 12) {
      return 'Good morning';
    }

    if (currentHour < 18) {
      return 'Good afternoon';
    }
    return 'Good evening';
  };

  return (
    <HomepageContainer>
      <HomePageHeaderImg src={HomeHeader} alt='' />
      <HomePageContent>
        <InnerHomePageContent>
          <HomePageHeaderTitle>
            {generateGreeting()}, <b>Mobin!!</b>
          </HomePageHeaderTitle>
          <MapInput onClick={() => history.push('/map')}>
            <img
              className='point-icon'
              src={Point}
              alt=''
              width={25}
              height={25}
            />
            <p className='title'>{address}</p>
          </MapInput>
          <Card title='Featured'>
            <FeaturedContainer>
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
            </FeaturedContainer>
          </Card>
          <FeaturedContainer>
            <Product title='Cleaning' url='/assets/images/2-icon.png' />
            <Product title='Cleaning' url='/assets/images/2-icon.png' />
            <Product title='Cleaning' url='/assets/images/2-icon.png' />
          </FeaturedContainer>
          <FeaturedContainer>
            <Product title='Cleaning' url='/assets/images/2-icon.png' />
            <Product title='Cleaning' url='/assets/images/2-icon.png' />
            <Product title='Cleaning' url='/assets/images/2-icon.png' />
          </FeaturedContainer>
          <Collapse isOpen={collapsed} style={{ width: '100%' }}>
            <FeaturedContainer>
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
            </FeaturedContainer>
            <FeaturedContainer>
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
            </FeaturedContainer>
            <FeaturedContainer>
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
              <Product title='Cleaning' url='/assets/images/2-icon.png' />
            </FeaturedContainer>
          </Collapse>
          {collapsed ? (
            <FontAwesomeIcon
              icon={faAngleUp}
              size='3x'
              onClick={() => setCollapsed(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleDown}
              size='3x'
              onClick={() => setCollapsed(true)}
            />
          )}
        </InnerHomePageContent>
        <hr />
        <WhatNewContainer>
          <h5>What's New</h5>
          <SliderContainer>
            <Slider {...settings}>
              <BigCard
                urlHeader='/assets/images/29.png'
                title='How to Use the App'
                subTitle='Getting access to on-demand'
              />
              <BigCard
                urlHeader='/assets/images/27.png'
                title='List Your Service on MyKuya'
                subTitle='Do you offer ManPower'
              />
            </Slider>
          </SliderContainer>
        </WhatNewContainer>
      </HomePageContent>
    </HomepageContainer>
  );
};
