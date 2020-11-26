import model from '../assets/model_16.jpg';
import ServiceBannerComponent from '../components/ServiceBanner';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import PrivateComponent from '../components/PrivateComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const PrivatePage = () => {
  const services = [
    'Required timing - 5 days',
    'Completely online – no need to visit office',
    'CA assisted company filing for all your company needs',
  ];
  return (
    <>
      <Head>
        <title>Private Company Registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Private limited company'
        btn='Register now'
        img={model}
        id='/private-company-application-form'
        tagline='Get your private company registered at Rs 11,800/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Private limited company' />
        <PrivateComponent />
      </div>
    </>
  );
};

export default PrivatePage;
