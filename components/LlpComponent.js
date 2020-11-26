import { Layout, Row, Col, Typography, Collapse, Anchor } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import { llpBasic, llpStandard, llpPremium } from './PricingDetails';

const LlpComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How can a person become partner of an LLP ?',
      details:
        'Persons, who subscribed to the “Incorporation Document” at the time of incorporation of LLP, shall be partners of LLP. Subsequent to incorporation, new partners can be admitted in the LLP as per conditions and requirements of LLP Agreement.',
    },
    {
      id: 2,
      title: 'How can an existing partner cease to be a partner of an LLP ?',
      details:
        'A person may cease to be a partner in accordance with the agreement or in the absence of agreement, by giving 30 days notice to the other partners. Notice is required to be given to ROC when a person becomes or ceases to be partner or for any change in partners.',
    },
    {
      id: 3,
      title: ' What are the compliances related to change in partner ?',
      details:
        'Any change in Partner (admission, resignation, cessation, death, expulsion) should be filed e-form 4 within 30 days of change with fees. And also supplementary LLP agreement to be filed e-form 3 with ROC within 30 days with fees given the alteration in mutual rights and duties of partners and Form 4 shall include a statement signed by the incoming partner that he consents to become a partner.',
    },
    {
      id: 4,
      title:
        'Whether every LLP would be required to maintain and file accounts ?',
      details:
        'An LLP shall be under obligation to maintain annual accounts reflecting true and fair view of its state of affairs. The Statement of Account & Solvency in Form-8, essentially signed by the designated partners, is to be filed within 30days from the six months from the closure of the respective financial year i.e. by 30th October. If there is any delay filing of Form 8 then the penalty would be Rs. 100/- after the above specified period.',
    },
    {
      id: 6,
      title: 'Whether audit of all LLPs would be mandatory ?',
      details:
        'Every LLP in India, whose annual turnover exceeds the magnitude of Rs. 40Lakhs or the total contribution of its partners gets above the limit of Rs. 25Lakhs, is mandatorily need to get its accounts audited every financial year, strictly in accordance with the rules and provisions provided in the LLP Rules of 2009.',
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
  const LlpDocument = [
    {
      id: 1,
      case: 'Latest passport size Photographs of all partners',
    },
    {
      id: 2,
      case: 'PAN ( Permanent Account Number) of all Partners (Minimum 2)',
    },
    {
      id: 3,
      case:
        'Identity Proof of each partner, (Aadhar Card, Passport, Driving License or Voter ID Card)',
    },
    {
      id: 4,
      case:
        'Address Proof of all partners (Bank Statement or Passbook, electricity bill, telephone bill, Aadhar card or any utility bill)',
    },
    {
      id: 5,
      case:
        'Copy of Mobile bill, telephone bill, electricity bill or Bank Statement of all Partners with Present address',
    },
    {
      id: 6,
      case:
        'Registered Office Address Proof – Electricty Bill along with Rent Agreement / ownership proof of proposed registered office.',
    },
    {
      id: 7,
      case:
        'Stamp paper for LLP Agreement of State where LLP is to be Incorporated',
    },
    {
      id: 8,
      case: 'Documents Must be self attested',
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
                <Link href='#llp-reg' title='Limited liability partnership' />
                <Link href='#llp-docs' title='Documents required' />
                <Link href='#llp-pricing' title='Pricing' />
                <Link href='#llp-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='llp-reg service' id='llp-reg'>
                <Typography>
                  <Title>Limited liability partnership (LLP)</Title>
                  <Paragraph strong>
                    This is business form which provides benefits of limited
                    liability and flexibility of a partnership business.
                    Compliance requirement is less in LLP as compared to company
                    form of business structure. Audit is exempted up to certain
                    level of turnover in case of LLP. Minimum two people can
                    form an LLP. There is no maximum limit on the number of its
                    partners. This is preferred choice for small businesses and
                    instead of general partnership.We are leading LLP
                    Registration consultants.
                  </Paragraph>
                </Typography>
              </div>
              {/* documents */}
              <div className='llp-docs service' id='llp-docs'>
                <DocumentComponent
                  documents={LlpDocument}
                  title='Documents required for LLP registration'
                />
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='llp-pricing'>
                <PricingComponent
                  dataOne={llpBasic}
                  dataTwo={llpStandard}
                  dataThree={llpPremium}
                  basic='11,800'
                  standard='17,700'
                  premium='30,000'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='llp-faq'>
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

export default LlpComponent;
