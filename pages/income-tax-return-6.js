import model from '../assets/model_10.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ItrSixComponent from '../components/ItrSixComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const ItrSixPage = () => {
  const services = [
    'Income tax return filing for companies.',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ITR filing for all your income tax needs',
  ];
  return (
    <>
      <Head>
        <title>Income tax return - 6</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income tax return - 6'
        btn='Register now'
        img={model}
        id='/itr-application-form'
        tagline='Get your ITR-6 filing at Rs 4,720/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income tax return - 6' />
        <ItrSixComponent />
      </div>
    </>
  );
};

export default ItrSixPage;
