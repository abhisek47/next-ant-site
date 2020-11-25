import model from '../assets/model_25.jpg';
import ServiceBannerComponent from '../components/ServiceBanner';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import PublicComponent from '../components/PublicComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const PublicPage = () => {
  const services = [
    'Required timing - 5 days',
    'Completely online – no need to visit office',
    'CA assisted company filing for all your company needs',
  ];
  return (
    <>
      <Head>
        <title>Public company registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Public Limited Company'
        btn='Register now'
        img={model}
        id='/public-company-application-form'
        tagline='Get your public limited company registered at Rs 28,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Public limited company' />
        <PublicComponent />
      </div>
    </>
  );
};

export default PublicPage;
