import model from '../assets/model_1.jpg';
import GstComponent from '../components/GstComponent';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const GstPage = () => {
  const services = [
    'Secure GST identification number',
    'Required timing - 5 days',
    'Completely online – no need to visit office',
    'CA assisted GST filing for all your GST needs',
  ];
  return (
    <>
      <Head>
        <title>GST registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='GST registration'
        btn='Register now'
        img={model}
        id='/gst-application-form'
        tagline='Get your company registered under GST at Rs 944/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='GST registration' />
        <GstComponent />
      </div>
    </>
  );
};

export default GstPage;
