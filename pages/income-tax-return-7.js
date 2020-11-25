import model from '../assets/model_11.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSevenComponent from '../components/ItrSevenComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const ItrSevenPage = () => {
  const services = [
    'Income tax return filing for trust, society etc.',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ITR filing for all your income tax needs',
  ];
  return (
    <>
      <Head>
        <title>Income tax return - 7</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income tax return - 7'
        btn='Register now'
        img={model}
        id='/itr-application-form'
        tagline='Get your ITR-7 filing at Rs 4,720/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income tax return - 7' />
        <ItrSevenComponent />
      </div>
    </>
  );
};

export default ItrSevenPage;
