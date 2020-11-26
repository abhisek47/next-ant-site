import React from 'react';
import model from '../assets/model_6.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TrademarkComponent from '../components/TrademarkComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const ItrThreePage = () => {
  const services = [
    'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
    'Required timing - 2 days',
    'CA assisted trademark filing for all your trademark needs',
  ];
  return (
    <>
      <Head>
        <title>Trademark registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Trademark registration'
        btn='Register now'
        img={model}
        id='/trademark-application-form'
        tagline='Get your trademark registered at Rs 6,490/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Trademark' />
        <TrademarkComponent />
      </div>
    </>
  );
};

export default ItrThreePage;
