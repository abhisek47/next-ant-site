import Head from 'next/head';
import model from '../assets/model_4.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import HeaderComponent from '../components/HeaderComponent';
import ItrTwoComponent from '../components/ItrTwoComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrTwoPage = () => {
  const services = [
    'Income tax return filing for persons having DIN or owing private limited company shares.',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ITR filing for all your income tax needs',
  ];
  return (
    <>
      <Head>
        <title>Income tax return - 2</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income tax return - 2'
        btn='Register now'
        img={model}
        id='/itr-application-form'
        tagline='Get your ITR-2 filing at Rs 2,320/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income tax return - 2' />
        <ItrTwoComponent />
      </div>
    </>
  );
};

export default ItrTwoPage;
