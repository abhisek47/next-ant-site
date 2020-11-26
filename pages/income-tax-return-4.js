import model from '../assets/model_8.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrFourComponent from '../components/ItrFourComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const ItrFourPage = () => {
  const services = [
    'Income tax return filing for persons having pressumptive income.',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ITR filing for all your income tax needs',
  ];
  return (
    <>
      <Head>
        <title>Income tax return - 4</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income tax return - 4'
        btn='Register now'
        img={model}
        id='/itr-application-form'
        tagline='Get your ITR-4 filing at Rs 3,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income tax return - 4' />
        <ItrFourComponent />
      </div>
    </>
  );
};

export default ItrFourPage;
