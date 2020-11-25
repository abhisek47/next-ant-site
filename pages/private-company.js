import model from '../assets/model_16.jpg';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const PrivateCompany = () => {
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
        tagline='Get your private company registered at Rs 9,440/-'
        services={services}
      />
      {/* <div className='container'>
        <BreadcrumbComponent title='Private limited company' />
        <PrivateComponent />
      </div> */}
    </>
  );
};

export default PrivateCompany;
