import model from '../assets/model_7.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import TmrenewalComponent from '../components/TmrenewalComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const ItrThreePage = () => {
  const services = [
    'Trademark filing under one class for proprietorship and small enterprises. Inclusive of government fee and taxes.',
    'Required timing - 5 days',
    'CA assisted trademark renewal filing for all your renewal needs',
  ];
  return (
    <>
      <Head>
        <title>Trademark renewal</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Trademark renewal'
        btn='Register now'
        img={model}
        id='/trademark-renewal-application-form'
        tagline='Get your trademark renewed at Rs 2,832/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Trademark renewal' />
        <TmrenewalComponent />
      </div>
    </>
  );
};

export default ItrThreePage;
