import Head from 'next/head';
import React from 'react';
import model from '../assets/model_12.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import HeaderComponent from '../components/HeaderComponent';
import PfComponent from '../components/PfComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const PfPage = () => {
  const services = [
    'Filing of application for provident fund registration',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'Cloud backup for 10 years',
  ];
  return (
    <>
      <Head>
        <title>Provident fund registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Provident fund registration'
        btn='Register now'
        img={model}
        id='/pf-application-form'
        tagline='Get your provident fund registration at Rs 6,400/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Provident fund' />
        <PfComponent />
      </div>
    </>
  );
};

export default PfPage;
