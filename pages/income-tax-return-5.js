import model from '../assets/model_9.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrFiveComponent from '../components/ItrFiveComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const ItrFivePage = () => {
  const services = [
    'Income tax return filing for partnership firm, AOP .',
    'Required timing - 2 days',
    'Completely online – No need to visit office',
    'CA assisted ITR filing for all your income tax needs',
  ];
  return (
    <>
      <Head>
        <title>Income tax return - 5</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income tax return - 5'
        btn='Register now'
        img={model}
        id='/itr-application-form'
        tagline='Get your ITR-5 filing at Rs 3,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income tax return - 5' />
        <ItrFiveComponent />
      </div>
    </>
  );
};

export default ItrFivePage;
