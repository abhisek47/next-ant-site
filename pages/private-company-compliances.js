import model from '../assets/model_18.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import PrivateCompliancesComponent from '../components/PrivateCompliancesComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const PrivateCompliancesPage = () => {
  const services = [
    'Required timing - before due dates of compliance',
    'Completely online – no need to visit office',
    'CA assisted company compliances for all your company needs',
  ];
  return (
    <>
      <Head>
        <title>Annual compliances for private company</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances for private company'
        btn='Register now'
        img={model}
        id='https://rzp.io/l/private-company-compliances'
        tagline='Get your annual compliances registered under private company at Rs 24,000/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances for private company' />
        <PrivateCompliancesComponent />
      </div>
    </>
  );
};

export default PrivateCompliancesPage;
