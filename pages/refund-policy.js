import { Divider, Layout, Typography } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';

const RefundPolicy = () => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <Head>
        <title>Refund Policy</title>
      </Head>
      <Layout>
        <HeaderComponent />
        <div className='container' style={{ textAlign: 'left' }}>
          <div className='refund-policy'>
            <Title level={4}>Refund Policy</Title>
            <Paragraph strong>
              When a payment of fee is made to client filing, the fees paid in
              advance is retained by us in a client account. client filing will
              earn the fees upon working on a client’s matter. During an
              engagement, client filing earns fee at different rates and
              different times depending on the completion of various milestones
              (e.g. obtaining DIN, Filing of forms,assigning relationship
              manager, etc.). Refund cannot be provided for earned fee because
              resources and man hours spent on delivering the service are
              non-returnable in nature. Inshort, processing fees, payment
              gateway charges, admin fees, and cost of resources for the work
              done till date will be deducted. Further, we can’t refund or
              credit any money paid to government entities, such as filing fees
              or taxes, or to other third parties with a role in processing your
              order. Under any circumstance, client filing shall not be liable
              to refund any amount paid by the client.
            </Paragraph>
            <Divider />
            <Title level={4}>Force Majeure</Title>
            <Paragraph strong>
              Client filing shall not be considered in breach of its
              Satisfaction Guarantee policy or default under any terms of
              service, and shall not be liable to the Client for any cessation,
              interruption, or delay in the performance of its obligations by
              reason of earthquake, flood, fire, storm, lightning, drought,
              landslide, hurricane, cyclone, typhoon, tornado, natural disaster,
              act of God or the public enemy, epidemic, famine or plague, action
              of a court or public authority, change in law, explosion, war,
              terrorism, armed conflict, labor strike, lockout, boycott or
              similar event beyond our reasonable control, whether foreseen or
              unforeseen (each a “Force Majeure Event”).
            </Paragraph>
            <Divider />
            <Title level={4}>Cancellation Fee</Title>
            <Paragraph strong>
              Since we’re incurring costs and dedicating time, manpower,
              technology resources and effort to your service or document
              preparation, our guarantee only covers satisfaction issues caused
              by client filing – not changes to your situation or your state of
              mind. In case you require us to hold the processing of a service,
              we will hold the fee paid on your account until you are ready to
              commence the service.
            </Paragraph>
            <br />
            <Paragraph strong>
              Before processing any refund, we reserve the right to make best
              effort to complete the service. In case, you are not satisfied
              with the service, a cancellation fee of 20% + earned fee + fee
              paid to government would be applicable. In case of change of
              service, the cancellation fee would not be applicable.
            </Paragraph>
            <Divider />
            <Title level={4}>Factors Outside our Control</Title>
            <Paragraph strong>
              We cannot guarantee the results or outcome of your particular
              procedure. For instance, the government may reject a application
              for legal reasons beyond the scope of client filing service. In
              some cases, a government backlog or problems with the government
              platforms (e.g. MCA website, Income Tax website, FSSAI website,
              GST website etc) can lead to long delays before your process is
              complete. Problems like these are beyond our control and are not
              covered by this guarantee or eligible for refund. Hence, delay in
              processing of your file by the Government Department cannot be a
              reason for refund and Client Filing is not liable for the same.
            </Paragraph>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default RefundPolicy;
