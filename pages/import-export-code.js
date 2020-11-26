import model from '../assets/model_20.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import ImportExportComponent from '../components/ImportExportComponent';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const ImportExportPage = () => {
  const services = [
    'Filing of application for import export code registration',
    'Required timing - 2 days',
    'Completely online – no need to visit office',
    'CA assisted import export filing for all your import export needs',
  ];
  return (
    <>
      <Head>
        <title>Import export code registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Import export code registration'
        btn='Register now'
        img={model}
        id='/iec-application-form'
        tagline='Get your import export code registered at Rs 3,500/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Import export code' />
        <ImportExportComponent />
      </div>
    </>
  );
};

export default ImportExportPage;
