import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import gstrCase from '../assets/gstrCases.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import tdsElegibility from '../assets/tds.svg';
import {
  bookKeepingBasic,
  bookKeepingStandard,
  bookKeepingPremium,
} from './PricingDetails';

const BookKeepingComponent = () => {
  const tab1 = [
    {
      id: 1,
      title:
        'What is the purpose and difference of bookkeeping and accounting ?',
      details: `The purpose for both is keeping track of your company's income and how it spends that money. Bookkeeping is the day-to-day record keeping such as managing the receiving and payment of bills, managing the sales and receiving of payment from customers, and payroll processing. Accounting is the next step after bookkeeping. It starts where bookkeeping left off: Reviewing the bookkeeping processing, completing bank reconciliation, credit card reconciliation, completing payroll tax returns, sales tax returns, property tax returns (571-L), and compiling the periodic financial reports that summarize all of the record-keeping data.`,
    },
    {
      id: 2,
      title:
        'How long will I need a professional bookkeeper and/or accountant ?',
      details: `Bookkeeping and accounting is an ongoing, integral part of your business. Whether you hire Business-keepers or bring someone in-house on your payroll, it is important that the work be maintained to provide you with intrinsic reports to better serve your company's financial goals.`,
    },
    {
      id: 3,
      title: 'What if I want to do the record-keeping myself ?',
      details: `Business-keepers sets up and trains clients on Quickbooks Pro, allowing the owner/staff to maintain the accounting themselves in the software. We recommend that we "check-in" on your Quickbooks file to make sure things are being entered consistently and accurately so there are no surprises at year end`,
    },
    {
      id: 4,
      title: `My records are a mess and I'm embarrassed for anyone to see the paper mounds let alone organize them. Where do I start ?`,
      details: `Start by calling us. We can organize your records, set you up on Quickbooks Pro and get your accounting up and running. Do not be ashamed of paperwork. We love paper!`,
    },
    {
      id: 5,
      title: `How far does Business-keepers travel ?`,
      details: `We travel everywhere. We do charge for our driving time and if it requires a long distance, flight and overnight arrangements will also be covered by the client. We don't want miles to get in the way of accounting progress.`,
    },
    {
      id: 6,
      title: `What sets you apart from your competition ?`,
      details: `Business-keepers has a strong, solid foundation in GAAP (Generally Accepted Accounting Principles) as well as Quickbooks Pro software knowledge (Certified Quickbooks Pro Advisor) which allows us to handled any kind of bookkeeping or accounting issue (non-income tax related). Therefore we do not require any “hand-holding” by the client; we are able to jump right in, find out what needs to be done with proper assessment, then roll up our sleeves and complete the work efficiently.`,
    },
  ];
  const tdsFormTypes = [
    'Take your accounts to the software only at our physical branch.we don’t provide service at client door for accounts.once in 15 days our executive will collect all documents and accounting entries will be made in software.',
    'You will have access to your software at your own shop/office/business place',
    'Accounting done by experienced experts',
    'Several reports provided to avoid penalties in statute',
    'You can focus on your core operations while we take care of your accounting and compliance burden',
  ];
  const { Title, Paragraph, Text } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#tds-filing' title='Book keeping' />
                <Link href='#tds-type' title='Features' />
                <Link href='#tds-pricing' title='Pricing' />
                <Link href='#tds-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='tds-filing service' id='tds-filing'>
                <Typography>
                  <Title>Book keeping and accounting services</Title>
                  <Paragraph strong>
                    We offer some of the most crucial bookkeeping & accounting
                    services that will help in managing your business. General
                    accounting & book keeping. Financial statement preparation.
                    preparation of tax returns. Cash flow statements.
                  </Paragraph>
                  <Paragraph strong>
                    Our team is conversant with QuickBooks, Zoho, Tally, busy
                    and other softwarewhich is generally used and accepted by
                    statutes .
                  </Paragraph>
                </Typography>
              </div>
              {/* tds form type */}
              <div className='tds-type service' id='tds-type'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Quality Features</Title>
                    <Paragraph strong>
                      Main features of our offerings in accounting services:
                    </Paragraph>
                    <List
                      dataSource={tdsFormTypes}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>
                            <span className='emoji check'>
                              <CheckCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={gstrCase} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='tds-pricing'>
                <PricingComponent
                  dataOne={bookKeepingBasic}
                  dataTwo={bookKeepingStandard}
                  dataThree={bookKeepingPremium}
                  basic='3,500'
                  standard='5,000'
                  premium='5,500'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='tds-faq'>
                <Title className='faq-head'>Frequently asked questions</Title>
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1']}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className='site-collapse-custom-collapse'>
                  {tab1.map((tab) => (
                    <Panel
                      header={tab.title}
                      key={tab.id}
                      className='site-collapse-custom-panel'>
                      <p>{tab.details}</p>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default BookKeepingComponent;
