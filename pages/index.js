import Head from 'next/head';
import myImg from '../assets/boost-1-1.png';
import BannerComponent from '../components/BannerComponent';
import HeaderComponent from '../components/HeaderComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClientFilingIndia - Company, GST, Income Tax, Trademark</title>
      </Head>
      <HeaderComponent />
      <BannerComponent
        head='We are helping startup to grow your business'
        para='We have over 8+ years of corporate and consulting experience with top firms. Our network includes experienced chartered accountants, company secretaries, lawyers, cost accountants and many more.'
        img={myImg}
      />
    </div>
  );
}
