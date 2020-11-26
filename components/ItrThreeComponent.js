import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrThreeEligibility from '../assets/itrThree-eligibility.svg';
import itrThreeIneligibility from '../assets/itrThree-ineligibility.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import {
  itrThreeBasic,
  itrThreeStandard,
  itrThreePremium,
} from './PricingDetails';

const ItrThreeComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'Is balance sheet mandatory for ITR 3 ?',
      details:
        'It is not compulsory to prepare and submit full balance sheet in ITR-3. But you have to provide 4 details in column 6 of Part A BS i.e. Sundry debtors, Sundry Creditors, Cash and bank Balance and Stock in trade. ... ITR 3 is for person carrying on business or profession.',
    },
    {
      id: 2,
      title: 'Why ITR 3 is filed ?',
      details:
        'Income tax return is prepared on ITR-3 when: ... where income chargeable to income-tax under the head "Profits or gains of business or profession`" does not include any income except the income by way of any interest, salary, bonus, commission or remuneration, due to, or received by him from such firm.',
    },
    {
      id: 3,
      title: 'What is difference between ITR 3 and ITR 4 ?',
      details:
        'Return in ITR 3 cannot be filed by any person other than an individual or a HUF. On the other hand, return in ITR 4 (Sugam) can be filed by an individual or HUF or firm (other than an LLP) if his/her total income includes: Presumptive Income computed as per provisions of Sections 44AD, Section 44ADA or Section 44AE.',
    },
    {
      id: 4,
      title: 'Can I file ITR 3 for presumptive income ?',
      details:
        'In such a case, you will need to use ITR 3 to report both income taxable on presumptive basis and also capital gain/loss. There is a separate line item (No. 4 in Schedule BP) in ITR 3 form of FY 2017-18, which allows to report income from presumptive basis taxation.',
    },
  ];
  const eligibility = [
    'If the source of income is from one house property',
    'If the source of income is from pension or salary',
    'If the source of income is from other sources',
  ];
  const ineligibility = [
    'The taxpayer whose income is more than Rs 50 lakhs',
    'Non-residents and Residents but not ordinarily resident',
    'Taxpayers who have two or more house properties',
    'Taxpayer having income under business or profession',
    'Taxpayers who have long or short-term capital gains',
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
                <Link href='#itrThree-filing' title='Income tax return - 3' />
                <Link href='#itrThree-eligibility' title='Eligibility' />
                <Link href='#itrThree-ineligibility' title='Ineligibility' />
                <Link href='#itrThree-pricing' title='Pricing' />
                <Link href='#itrThree-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrThree-filing service' id='itrThree-filing'>
                <Typography>
                  <Title>Income tax return - 3</Title>
                  <Paragraph strong>
                    For individuals and HUF with income from profits of a
                    business or profession. ITR 3 is the form used by the
                    individuals and Hindu Undivided Families who are registered
                    as ‘Partners’ in a firm. . This is applicable for the
                    professionals but in a partnership profession. The partner
                    must be earning income in the form of interest, salary,
                    bonus, commission, etc.
                  </Paragraph>
                </Typography>
              </div>
              {/* #itrThree eligibility */}
              <div
                className='itrThree-eligibility service'
                id='itrThree-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-3</Title>
                    <Paragraph strong>
                      ITR-3 is filed by the taxpayers whose income is up to Rs
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
                    <img src={itrThreeEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* #itrThree ineligibility */}
              <div
                className='itrThree-ineligibility service'
                id='itrThree-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrThreeIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-3</Title>
                    <Paragraph strong>
                      ITR-3 is filed by the taxpayers whose income is up to Rs
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
                  {/* due date */}
                  <div className='itr-duedate'>
                    <Title>Due date for filing ITR-3 online AY 2020-21</Title>
                    <Paragraph strong>
                      ITR -3 has to be filed on or before 30 Nov of the
                      following year. After that, a late fee under section 234F
                      is levied
                    </Paragraph>
                  </div>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrThree-pricing'>
                <PricingComponent
                  dataOne={itrThreeBasic}
                  dataTwo={itrThreeStandard}
                  dataThree={itrThreePremium}
                  basic='2,900'
                  standard='4,900'
                  premium='6,900'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='itrThree-faq'>
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

export default ItrThreeComponent;
