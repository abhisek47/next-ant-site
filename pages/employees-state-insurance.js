import model from '../assets/model_13.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiComponent from '../components/EsiComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import Head from 'next/head';

const EsiPage = () => {
  const services = [
    'Filing of application for ESI registration',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ESI filing for all your ESI needs',
  ];
  return (
    <>
      <Head>
        <title>ESI registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ESI registration'
        btn='Register now'
        img={model}
        id='/esi-application-form'
        tagline='Get your ESI registration at Rs 8,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Employees state insurance' />
        <EsiComponent />
      </div>
    </>
  );
};

export default EsiPage;
