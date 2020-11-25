import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import iecCase from '../assets/iecCases.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
import PricingComponent from './PricingComponent';
import { iecPremium, iecStandard, iecBasic } from './PricingDetails';

const ImportExportComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How long does it taketo obtain IE Code registration ?',
      details:
        'IE Code Registration can be obtained from the DGFT in 2 - 3 working days after submission of all required documents and application.',
    },
    {
      id: 2,
      title: 'What is the penalty for not having IE Code ?',
      details:
        'IE Code is not a mandatory registration, only importers and exporters of goods or services must have IE Code.Therefore, there is no penalty for not having IE Code; however, import / export will not be possible without an IE Code.',
    },
  ];
  const iecCases = [
    'IEC is mandatory for import and export of goods.However in the following cases IEC is not mandatory',
    'Person exporting or importing goods for personal use , not related to business',
    'Persons exporting or importing goods to/from Nepal or Myanmar through Indo - Myanmar border areas, upto value of rs 25000 Filing of return is not required under IEC.',
  ];
  const iecDocument = [
    { id: 1, case: 'Copy of PAN Card' },
    { id: 2, case: 'Copy of Aadhaar Card/ Voter identity card of applicant' },
    {
      id: 3,
      case:
        'Telephone Bill/mobile postpaid bill/electricity bill/rent agreement/lease deed/ sale deed / partnership deed as a address proof.',
    },
    {
      id: 4,
      case:
        'In case the address proof is not in the name of the applicant firm, a No Objection Certificate(NOC) by the firm premises owner in favour of the firm along with the address proof is to be submitted as a single PDF document',
    },
    {
      id: 5,
      case:
        'Cancelled cheque of individual/enterprise having name printed on cheque.',
    },
    {
      id: 6,
      case: 'Digital signature or Adhaar OTP',
    },
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
                <Link href='#iec-reg' title='Import export code' />
                <Link href='#iec-cases' title='Eligibility' />
                <Link href='#iec-docs' title='Documents required' />
                <Link href='#iec-pricing' title='Pricing' />
                <Link href='#iec-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='iec-reg service' id='iec-reg'>
                <Typography>
                  <Title>What is import cxport code ?</Title>
                  <Paragraph strong>
                    IEC(Import export code ) or import export licence . is a 10
                    digit code(based on pan number) which is provided by DGFT
                    for import export transactions. Iec can be obtained in
                    personal name or in company name.
                  </Paragraph>
                  <Paragraph strong>
                    An IEC number issued to applicant shall be valid for all its
                    divisions/ units/ factories/ branches. IEC is valid for
                    lifetime and no renewal is needed.
                  </Paragraph>
                </Typography>
              </div>
              {/* mandatory cases */}
              <div className='iec-cases service' id='iec-cases'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>When import export code is mandatory ?</Title>
                    <Paragraph strong>
                      In below all cases registration is mandatory .
                    </Paragraph>
                    <List
                      dataSource={iecCases}
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
                    <img src={iecCase} alt='gst-cases' />
                  </Col>
                </Row>
              </div>
              {/* documents */}
              <div className='iec-docs service' id='iec-docs'>
                <DocumentComponent
                  documents={iecDocument}
                  title='Documents required for import export registration'
                />
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='iec-pricing'>
                <PricingComponent
                  dataOne={iecBasic}
                  dataTwo={iecStandard}
                  dataThree={iecPremium}
                  basic='2800'
                  standard='2800'
                  premium='2800'
                  basicDiscount='3,500'
                  standardDiscount='3,500'
                  premiumDiscount='3,500'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='iec-faq'>
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

export default ImportExportComponent;
