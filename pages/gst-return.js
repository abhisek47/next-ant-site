import model from '../assets/model_2.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import GstreturnComponent from '../components/GstreturnComponent';
import HeaderComponent from '../components/HeaderComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import Head from 'next/head';

const GstreturnPage = () => {
  const services = [
    'Required timing - 2 days',
    '3 months GST return filing',
    'Completely online – no need to visit office',
    'CA assisted GST return filing for all your GST return needs',
  ];
  return (
    <>
      <Head>
        <title>GST return filing</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='GST return filing'
        btn='Register now'
        img={model}
        id='/gst-return-application-form'
        tagline='Get your GST return filing at Rs 2,899/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='GST return' />
        <GstreturnComponent />
      </div>
    </>
  );
};

export default GstreturnPage;
