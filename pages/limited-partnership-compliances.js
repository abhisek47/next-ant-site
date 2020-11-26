import model from '../assets/model_19.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import LlpCompliancesComponent from '../components/LlpCompliancesComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const PrivateCompliancesPage = () => {
  const services = [
    'Required timing - before due dates of compliance',
    'Completely online – no need to visit office',
    'CA assisted LLP compliances for all your LLP needs',
  ];
  return (
    <>
      <Head>
        <title>Annual compliances for limited liability partnership</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances for limited liability partnership'
        btn='Register now'
        img={model}
        id='https://rzp.io/l/llp-compliances'
        tagline='Get your annual LLP registered at Rs 30,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances for limited liability partnership' />
        <LlpCompliancesComponent />
      </div>
    </>
  );
};

export default PrivateCompliancesPage;
