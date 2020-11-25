import 'antd/dist/antd.css';
import '../styles/index.scss';
import Head from 'next/head';
import structuredData from '../schema';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta name='robots' content='index, follow' />
        <meta httpEquiv='Content-Type' content='text/html' />
        <meta name='author' content='Uday Prakash Choudhary' />
        <meta name='keywords' content='Company Registration in Kolkata' />
        <meta name='keywords' content='Trademark Registration in Kolkata' />
        <meta name='keywords' content='Legal Services in Kolkata' />
        <meta
          name='keywords'
          content='GST Registration & Return Filing in Kolkata'
        />
        <meta name='keywords' content='Income Tax Return Online Registration' />
        <meta name='keywords' content='ISO Registration in Kolkata' />
        <meta
          name='keywords'
          content='Provident Fund Registration for Employees'
        />
        <meta
          name='keywords'
          content='Annual Compliance For Private Limited Company'
        />
        <meta name='keywords' content='Business Consultant in Kolkata' />
        <meta
          name='p:domain_verify'
          content='4d6386eacb0e9c2891aaf61602ed3283'
        />
        <meta name='geo.region' content='IN-WB' />
        <meta name='geo.placename' content='Kolkata' />
        <meta name='geo.position' content='22.545412;88.356775' />
        <meta name='ICBM' content='22.545412, 88.356775' />
        <meta name='copyright' content='Clientfilingindia' />
        <meta name='format-detection' content='telephone=no' />
        <link rel='canonical' href='https://www.clientfilingindia.com/' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png'></link>
        <meta name='theme-color' content='#317EFB' />
        {/* Search Engine */}
        <meta
          name='description'
          content='We have over 8+ years of corporate and consulting experience with top firms including experienced Chartered Accountants, Company Secretaries, Lawyers.'
        />
        {/* Schema.org for Google */}
        <meta
          itemProp='name'
          content='ClientFilingIndia | Business Consultants in Kolkata'
        />
        <meta
          itemProp='description'
          content='We have over 8+ years of corporate and consulting experience with top firms including experienced Chartered Accountants, Company Secretaries, Lawyers.'
        />
        <meta
          itemProp='image'
          content='https://clientfilingindia.com/cover.jpg'
        />
        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta
          name='og:title'
          content='ClientFilingIndia | Business Consultants in Kolkata'
        />
        <meta
          name='og:description'
          content='We have over 8+ years of corporate and consulting experience with top firms including experienced Chartered Accountants, Company Secretaries, Lawyers.'
        />
        <meta
          name='og:image'
          content='https://clientfilingindia.com/cover.jpg'
        />
        <meta name='og:url' content='https://clientfilingindia.com/' />
        <meta name='og:site_name' content='Clientfilingindia' />
        <meta name='og:locale' content='en_IN' />
        <meta
          name='fb:admins'
          content='https://www.facebook.com/clientfilings'
        />
        <meta name='og:type' content='website' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          src='//code.tidio.co/arbcrwkok2q40m1i4vkie88rvgnn9dxr.js'
          async
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
