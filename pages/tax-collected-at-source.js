import model from '../assets/model_5.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TcsComponent from '../components/TcsComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const TcsPage = () => {
  const services = [
    'TCS filing online',
    'Required timing - 2 days',
    'CA assisted TCS filing for all your tax needs',
  ];
  return (
    <>
      <Head>
        <title>Tax collected at source </title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Tax collected at source'
        btn='Register now'
        img={model}
        id='https://rzp.io/l/tcs-filing'
        tagline='Get your TCS filing at Rs 1,499/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Tax collected at source' />
        <TcsComponent />
      </div>
    </>
  );
};

export default TcsPage;
