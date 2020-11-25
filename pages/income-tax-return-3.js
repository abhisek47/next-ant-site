import Head from 'next/head';
import model from '../assets/model_5.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import HeaderComponent from '../components/HeaderComponent';
import ItrThreeComponent from '../components/ItrThreeComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrThreePage = () => {
  const services = [
    'Income tax return filing for persons having business income and capital gain.',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ITR filing for all your income tax needs',
  ];
  return (
    <>
      <Head>
        <title>Income tax return - 3</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income tax return - 3'
        btn='Register now'
        img={model}
        id='/itr-application-form'
        tagline='Get your ITR-3 filing at Rs 2,320/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income tax return - 3' />
        <ItrThreeComponent />
      </div>
    </>
  );
};

export default ItrThreePage;
