/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// API
import { headersConfiguration, API, API_URL } from '../../Config';

// COMPONENT
import { Card, BigCard } from '../../components/card';
import { Products } from '../../components/product';
import { Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Greeting } from '../../components/greeting';
import { ToastContainer, toast } from 'react-toastify';

// STYLE
import {
  HomepageContainer,
  HomePageHeaderImg,
  HomePageHeaderTitle,
  HomePageContent,
  MapInput,
  InnerHomePageContent,
  WhatNewContainer,
  SliderContainer,
} from './style';

// HEADER
import HomeHeader from '../../assets/images/homeHeader.svg';
import Point from '../../assets/images/point.svg';

// INTERFACE
import { ProductItem, HotNew } from '../../interface';

interface TProps {
  address: string;
}

interface Metadata {
  products: ProductItem[];
  news: HotNew[];
  featured_products: ProductItem[];
}

interface TState extends Metadata {
  collapsed: boolean;
}

export const HomePage = ({ address }: TProps) => {
  const [localState, setLocalState] = useState<TState>({
    products: [],
    news: [],
    featured_products: [],
    collapsed: false,
  });

  const history = useHistory();

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  useEffect(() => {
    axios
      .get<Metadata>(`${API}/${API_URL.FETCH_METADATA}`, {
        headers: headersConfiguration,
      })
      .then((res) => {
        const response = res.data;

        setLocalState({
          ...localState,
          products: response.products,
          featured_products: response.featured_products,
          news: response.news,
        });
      })
      .catch(() => {
        toast(
          'The API Server seems not to be started, Please check it on!!!!',
          {
            type: 'error',
          },
        );
      });
  }, []);

  return (
    <HomepageContainer>
      <HomePageHeaderImg src={HomeHeader} alt='' />
      <HomePageContent>
        <InnerHomePageContent>
          <HomePageHeaderTitle>
            <Greeting userName='Mobil' />
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
            <Products products={localState.featured_products} forCollapsed />
          </Card>
          <Collapse isOpen={true} style={{ width: '100%' }}>
            <Products products={localState.products} />
          </Collapse>
          <Collapse isOpen={localState.collapsed} style={{ width: '100%' }}>
            <Products products={localState.products} forCollapsed />
          </Collapse>
          {localState.products.length > 0 ? (
            localState.collapsed ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                size='3x'
                onClick={() =>
                  setLocalState({ ...localState, collapsed: false })
                }
              />
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                size='3x'
                onClick={() =>
                  setLocalState({ ...localState, collapsed: true })
                }
              />
            )
          ) : null}
        </InnerHomePageContent>
        <hr />
        <WhatNewContainer>
          <h5>What's New</h5>
          <SliderContainer>
            <Slider {...settings}>
              {localState.news.map((v) => {
                return (
                  <BigCard
                    key={v.id}
                    urlHeader={v.image}
                    title={v.title}
                    subTitle={v.subTitle}
                  />
                );
              })}
            </Slider>
          </SliderContainer>
        </WhatNewContainer>
      </HomePageContent>
      <ToastContainer />
    </HomepageContainer>
  );
};
