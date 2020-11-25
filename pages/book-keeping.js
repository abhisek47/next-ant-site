import model from '../assets/model_18.jpg';
import BreadcrumbComponent from '../components/BreadcrumbComponent';
import ServiceBannerComponent from '../components/ServiceBanner';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';
import BookKeepingComponent from '../components/BookKeepingComponent';

const BookKeeping = () => {
  const services = [
    'General accounting & book keeping',
    'Financial statement preparation',
    'Required timing - 2 days',
  ];
  return (
    <>
      <Head>
        <title>Book keeping registration</title>
      </Head>
      <HeaderComponent />
      <ServiceBannerComponent
        head='Book keeping'
        btn='Register now'
        img={model}
        id='https://rzp.io/l/book-keeping'
        tagline='We provide book keeping services just Rs 2,800/-'
        services={services}
      />
      <div className='container'>
        <BreadcrumbComponent title='Book keeping' />
        <BookKeepingComponent />
      </div>
    </>
  );
};

export default BookKeeping;
