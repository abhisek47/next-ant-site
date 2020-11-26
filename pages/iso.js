import model from '../assets/model_21.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import IsoComponent from '../components/IsoComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const IsoPage = () => {
  const services = [
    'Filing of application for ISO rgistration',
    'Required Timing - 9 days',
    'Completely online – no need to visit office',
    'CA assisted ISO filing for all your ISO needs',
  ];
  return (
    <>
      <Head>
        <title>ISO registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ISO registration'
        btn='Register now'
        id='/iso-application-form'
        img={model}
        tagline='Get your ISO registered at Rs 6,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='International organization for standardization' />
        <IsoComponent />
      </div>
    </>
  );
};

export default IsoPage;
