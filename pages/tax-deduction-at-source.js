import model from '../assets/model_25.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TdsComponent from '../components/TdsComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const TdsPage = () => {
  const services = [
    'TDS return filing online',
    'Required timing - 2 days',
    'CA assisted trademark filing for all your Tax needs',
  ];
  return (
    <>
      <Head>
        <title>Tax deduction at source</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Tax deduction at source'
        btn='Register now'
        img={model}
        id='https://rzp.io/l/tds-filing'
        tagline='Get your TDS filing at Rs 1,499/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Tax deduction at source' />
        <TdsComponent />
      </div>
    </>
  );
};

export default TdsPage;
