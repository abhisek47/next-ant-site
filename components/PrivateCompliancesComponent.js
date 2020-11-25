import { Layout, Row, Col, Typography, Collapse, Anchor } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PricingComponent from './PricingComponent';
import {
  privateCompliancesBasic,
  privateCompliancesStandard,
  privateCompliancesPremium,
} from './PricingDetails';

const PrivateCompliancesComponent = () => {
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
        'The prerequisites for the incorporation of a private limited company are that: The number of members must be between 2-200,  There must be at least two directors and two shareholders, Each director must have a Directors Identification Number(DIN) , PAN card copy of directors/ shareholders.Passport copy for NRI subscribers.',
    },
    {
      id: 4,
      title:
        'How are PAN and TAN communicated to the user once SPICe INC 32 is accepted?',
      details:
        ' On acceptance of SPICe forms, the Certificate of Incorporation (COI) will be issued with valid PAN and TAN as allotted by the Income Tax department. An email with the COI as an attachment along with PAN and TAN will be sent to the applicant. PAN and TAN in the email will be held valid as the requirement for a laminated card for PAN has been done away with.',
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
                <Link
                  href='#privateCompli-reg'
                  title='Compliances for private company'
                />
                <Link href='#privateCompli-pricing' title='Pricing' />
                <Link href='#privateCompli-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='privateCompli-reg service' id='privateCompli-reg'>
                <Typography>
                  <Title>Annual compliance for private company</Title>
                  <Paragraph strong>
                    A private company is an entity enjoying a separate identity
                    which requires maintaining its active status through the
                    regular filing with MCA. For every company, it is compulsory
                    to file an annual return and audited financial statements
                    with MCA for every financial year. The RoC filing is
                    mandatory irrespective of the turnover, whether it is zero
                    or in crore. Whether a single transaction is undertaken or
                    none, annual compliances for private limited are mandatory
                    for every registered company.
                  </Paragraph>
                  <Paragraph strong>
                    Both the forms are filed to report the activities and
                    financial date for concerned Financial Year. The due dates
                    for annual filing of a company are based on the date of the
                    Annual General Meeting. The continuous failure may lead to
                    the removal of the company’s name from RoC’s register,
                    including disqualification of directors. Also, it has been
                    observed that MCA has actively taken bold steps for dealing
                    with any such failures.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='privateCompli-pricing'>
                <PricingComponent
                  dataOne={privateCompliancesBasic}
                  dataTwo={privateCompliancesStandard}
                  dataThree={privateCompliancesPremium}
                  basic='24000'
                  standard='32000'
                  premium='40000'
                  basicDiscount='30,000'
                  standardDiscount='40,000'
                  premiumDiscount='50,000'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='privateCompli-faq'>
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

export default PrivateCompliancesComponent;
