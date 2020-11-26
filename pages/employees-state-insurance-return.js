import model from '../assets/model_14.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import EsiReturnComponent from '../components/EsiReturnComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import Head from 'next/head';

const EsiReturnPage = () => {
  const services = [
    'Filing of application for ESI return filing',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ESI return filing for all your ESI needs',
  ];
  return (
    <>
      <Head>
        <title>ESI return filing</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='ESI return filing'
        btn='Register now'
        img={model}
        tagline='Get your ESI return filing at Rs 799/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Employees state insurance return' />
        <EsiReturnComponent />
      </div>
    </>
  );
};

export default EsiReturnPage;
