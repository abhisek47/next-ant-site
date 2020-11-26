import model from '../assets/model_15.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpComponent from '../components/LlpComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const LlpPage = () => {
  const services = [
    'Required timing - 5 days',
    'Completely online – no need to visit office',
    'CA assisted LLP filing for all your LLP needs',
  ];
  return (
    <>
      <Head>
        <title>Limited liability partnership registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Limited Liability Partnership'
        btn='Register now'
        img={model}
        id='/llp-application-form'
        tagline='Get your LLP registered at Rs 11,800/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Limited liability partnership' />
        <LlpComponent />
      </div>
    </>
  );
};

export default LlpPage;
