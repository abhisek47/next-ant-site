import model from '../assets/model_30.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import OtherCompliancesComponent from '../components/OtherCompliancesComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const PrivateCompliancesPage = () => {
  const services = [
    'Required timing - before due dates of compliance',
    'Completely online – no need to visit office',
    'CA assisted partnership compliances for all your partnership firm needs',
  ];
  return (
    <>
      <Head>
        <title>
          Annual compliances for partnership firm, society, trust, ngo
        </title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Compliances for partnership firm, society, trust, ngo'
        btn='Register now'
        img={model}
        id='https://rzp.io/l/partnership-firm-compliances'
        tagline='Get your annual compliances registered under partnership firm at Rs 18,880/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Compliances for partnership firm, society, trust, ngo' />
        <OtherCompliancesComponent />
      </div>
    </>
  );
};

export default PrivateCompliancesPage;
