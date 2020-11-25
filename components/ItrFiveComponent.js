import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrFiveEligibility from '../assets/itrFive-eligibility.svg';
import itrFiveIneligibility from '../assets/itrFive-ineligibility.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import {
  itrFiveBasic,
  itrFiveStandard,
  itrFivePremium,
} from './PricingDetails';

const ItrFiveComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'Can a trust file ITR 5 ?',
      details:
        'Who is eligible to file the ITR-5 Form ? This form can be used a person being a firm, LLPs, AOP, BOI, artificial juridical person referred to in section 2(31)(vii),estate of deceased, estate of insolvent, business trust and investment fund, cooperative society and local authority.',
    },
    {
      id: 2,
      title: 'Is DSC mandatory for ITR 5 ?',
      details:
        'It is mandatory for an individual, HUF, firm, LLP (if their accounts are required to be audited under the provisions of Section 44AB), political parties and companies to file the ITR using the DSC (Class 2). ... Before verifying the ITR using DSC, it is mandatory to register the DSC on the income-tax e-filing website.',
    },
    {
      id: 3,
      title: 'How can I file my ITR 5 offline ?',
      details: `The Income Tax department doesn't allow offline filings for ITR Form 5`,
    },
  ];
  const eligibility = [
    'Firms',
    'Limited Liability Partnerships (LLPs)',
    'Body of Individuals (BOIs)',
    'Association of Persons (AOPs)',
    'Co-operative Societies',
    'Artificial Judicial Persons',
    'Local Authorities.',
  ];
  const ineligibility = [
    'Trusts',
    'Political party',
    'Institutions',
    'Colleges',
    'Individuals',
    'HUFs (Hindu Undivided Families)',
    'Companies',
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
                <Link href='#itrFive-filing' title='Income tax return - 5' />
                <Link href='#itrFive-eligibility' title='Eligibility' />
                <Link href='#itrFive-ineligibility' title='Ineligibility' />
                <Link href='#itrFive-pricing' title='Pricing' />
                <Link href='#itrFive-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrFive-filing service' id='itrFive-filing'>
                <Typography>
                  <Title>Income tax return - 5</Title>
                  <Paragraph strong>
                    For individuals and HUF with income from profits of a
                    business or profession. ITR 5 is the form used by the
                    individuals and Hindu undivided families who are registered
                    as ‘Partners’ in a firm. . This is applicable for the
                    professionals but in a partnership profession. The partner
                    must be earning income in the form of interest, salary,
                    bonus, commission, etc.
                  </Paragraph>
                </Typography>
              </div>
              {/* #itrFive eligibility */}
              <div
                className='itrFive-eligibility service'
                id='itrFive-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-5</Title>
                    <Paragraph strong>
                      ITR-5 is filed by the taxpayers whose income is up to Rs
                      50 lakhs from below- mentioned sources:
                    </Paragraph>
                    <List
                      dataSource={eligibility}
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
                    <img src={itrFiveEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* #itrFive ineligibility */}
              <div
                className='itrFive-ineligibility service'
                id='itrFive-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrFiveIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-5</Title>
                    <Paragraph strong>
                      ITR-5 is filed by the taxpayers whose income is up to Rs
                      50 lakhs from below- mentioned sources:
                    </Paragraph>
                    <List
                      dataSource={ineligibility}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>
                            <span className='emoji uncheck'>
                              <ExclamationCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrFive-pricing'>
                <PricingComponent
                  dataOne={itrFiveBasic}
                  dataTwo={itrFiveStandard}
                  dataThree={itrFivePremium}
                  basic='2400'
                  standard='2400'
                  premium='2400'
                  basicDiscount='3,000'
                  standardDiscount='3,000'
                  premiumDiscount='3,000'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='itrFive-faq'>
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

export default ItrFiveComponent;
