import { Layout, Row, Col, Typography, Collapse, Anchor } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import companyDocs from '../assets/company-docs.svg';
import {
  privateStandard,
  privateBasic,
  privatePremium,
} from './PricingDetails';

const PrivateComponent = () => {
  const tab1 = [
    {
      id: 1,
      title:
        'Can the private company be incorporated with a residential address ?',
      details:
        'Yes. The company needs to provide address proof for incorporation. But the Ministry of Corporate Affairs (MCA) allows a residential address to be used as the company’s registered address. Thus any address can be provided as the registered address.',
    },
    {
      id: 2,
      title: 'What are MOA and AOA ?',
      details:
        '. Memorandum of Association (MOA) is defined under section 2(56) of the Companies Act 2013. It is the foundation on which the company is built. It defines the constitution, powers and objects of the company The Articles of Association(AOA) is defined under section 2(5) of the Companies Act.It details all the rules and regulations relating to the management of the company',
    },
    {
      id: 3,
      title:
        'What are the prerequisites to incorporate a Private Limited Company ?',
      details:
        'The prerequisites for the incorporation of a private limited company are that: The number of members must be between 2-50,  There must be at least two directors and two shareholders, Each director must have a Directors Identification Number(DIN) , PAN card copy of directors/ shareholders.Passport copy for NRI subscribers.',
    },
    {
      id: 4,
      title:
        'How are PAN and TAN communicated to the user once SPICe eForm is accepted ?',
      details:
        ' On acceptance of SPICe forms, the Certificate of Incorporation (COI) will be issued with valid PAN and TAN as allotted by the Income Tax department. An email with the COI as an attachment along with PAN and TAN will be sent to the applicant. PAN and TAN in the email will be held valid as the requirement for a laminated card for PAN has been done away with.',
    },
  ];
  // const gstCases = [
  //   'Export sales or services',
  //   'Selling on E-commerce sites',
  //   'Reverse Charge',
  //   'Inter State Supply(sale outside state)',
  //   'Casual Taxable Person',
  //   'Non resident taxable person',
  //   'Input Service Distributor',
  //   'Crossing the Threshold(40lacs or 20 lacs',
  // ];
  const GstDocument = [
    {
      id: 1,
      case: 'PAN card of all directors',
    },
    {
      id: 2,
      case: 'Voter card / passport / driving licence of all directors',
    },
    { id: 3, case: 'Photos of all director' },
    {
      id: 4,
      case: 'Mobile bill / electricity bill / bank passbook of all directors',
    },
    {
      id: 5,
      case: 'Digital signature certificate of directors',
    },
    {
      id: 6,
      case:
        'Rent agreement / ownership proof with electricity bill / water bill / property tax receipt of office address proof',
    },
  ];
  const { Title, Paragraph } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#private-reg' title='Private limited company' />
                <Link href='#private-docs' title='Documents required' />
                <Link href='#private-pricing' title='Pricing' />
                <Link href='#private-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='private-reg service' id='private-reg'>
                <Typography>
                  <Title>Private limited company</Title>
                  <Paragraph strong>
                    Company is a popular option to start a business in India by
                    startups and businesses with higher growth aspirations. Pvt
                    Ltd company is incorporated under the Companies Act of 2013,
                    and governed by the Ministry of Corporate Affairs (MCA). It
                    is a registered corporate structure, that provides business
                    a separate legal identity from its owners. Hence, providing
                    key advantages like the ability to contract in its own name,
                    and safeguard personal assets of the owners from business
                    liabilities.
                  </Paragraph>
                </Typography>
              </div>
              {/* documents */}
              <div className='private-docs service' id='private-docs'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <DocumentComponent
                      documents={GstDocument}
                      title='Documents required for private company registration'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={companyDocs} alt='company documents' />
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='private-pricing'>
                <PricingComponent
                  dataOne={privateBasic}
                  dataTwo={privateStandard}
                  dataThree={privatePremium}
                  basic='11,800'
                  standard='17,700'
                  premium='30,000'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='private-faq'>
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

export default PrivateComponent;
