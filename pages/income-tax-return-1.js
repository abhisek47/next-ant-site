import Head from 'next/head';
import model from '../assets/model_3.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import HeaderComponent from '../components/HeaderComponent';
import ItrOneComponent from '../components/ItrOneComponent';
import ServiceBannerComponent from '../components/ServiceBanner';

const ItrOnePage = () => {
  const services = [
    'Income tax return filing for an individual with salary income of less than Rs. 50 lakhs.',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted ITR filing for all your income tax needs',
  ];
  return (
    <>
      <Head>
        <title>Income tax return - 1</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Income tax return - 1'
        btn='Register now'
        img={model}
        id='/itr-application-form'
        tagline='Get your ITR-1 filing at Rs 2,900/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Income tax return - 1' />
        <ItrOneComponent />
      </div>
    </>
  );
};

export default ItrOnePage;
