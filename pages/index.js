import Head from 'next/head';
import myImg from '../assets/boost-1-1.png';
import BannerComponent from '../components/BannerComponent';
import StatsComponent from '../components/StatsComponent';
import PopularComponent from '../components/PopularComponent';
import QuotesComponent from '../components/QuotesComponent';
import SupportComponent from '../components/SupportComponent';
import HeaderComponent from '../components/HeaderComponent';
import FaqComponent from '../components/FaqComponent';
import DiwaliComponent from '../components/DiwaliComponent';
import SpeacialOffers from '../components/SpeacialOffers';
import {
  companySpeacial,
  gstSpeacial,
  incometaxSpeacial,
} from '../components/PricingDetails';

export default function Home() {
  return (
    <>
      <Head>
        <title>ClientFilingIndia - Company, GST, Income Tax, Trademark</title>
      </Head>
      <HeaderComponent />
      <BannerComponent
        head='We are helping startup to grow your business'
        para='We have over 8+ years of corporate and consulting experience with top firms. Our network includes experienced chartered accountants, company secretaries, lawyers, cost accountants and many more.'
        btn='Get Started'
        img={myImg}
      />
      <StatsComponent />
      <PopularComponent />
      <DiwaliComponent />
      {/* Pricing info */}
      <div className='pricing service' id='gst-pricing'>
        <SpeacialOffers
          dataOne={companySpeacial}
          dataTwo={gstSpeacial}
          dataThree={incometaxSpeacial}
          basic='9440'
          standard='944'
          premium='2320'
        />
      </div>
      <QuotesComponent />
      <SupportComponent />
      <FaqComponent />
    </>
  );
}
