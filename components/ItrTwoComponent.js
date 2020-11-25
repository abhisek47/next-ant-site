import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrTwoEligibility from '../assets/itrTwo-eligibility.svg';
import itrTwoIneligibility from '../assets/itrTwo-ineligibility.svg';
import {
  CaretRightOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
} from '@ant-design/icons';
import { itrTwoBasic, itrTwoStandard, itrTwoPremium } from './PricingDetails';

const ItrTwoComponent = () => {
  const tab1 = [
    // need to change
    {
      id: 1,
      title:
        'Are monetary gifts received by an individual or Hindu Undivided Family (HUF) taxable ?',
      details: `If the following conditions are satisfied then any sum of money received (i.e, monetary gift may be received in cash, cheque, draft, etc.) by an individual/ HUF will be charged to tax: Sum of money received without consideration. The aggregate value of such sum of money received during the year exceeds Rs. 50,000.`,
    },
    {
      id: 2,
      title: 'Can we file ITR 2 times ?',
      details:
        'There is no limit for the number of times you can file a revised return. Remember, every time you file a revised return, you are required to provide details of your original ITR.',
    },
    {
      id: 3,
      title: 'What is pass through income in ITR 2 ?',
      details:
        'Any income accruing or arising to, or received by, a person, being a unit holder of an investment fund, out of investments made in the investment fund, shall be chargeable to income-tax in the same manner as if it were the income accruing or arising to, or received by, such person had the investments made by the investment fund been made directly by him.',
    },
    {
      id: 4,
      title: 'How long does it take to process ITR 2 ?',
      details:
        'One month. usually, the income tax department takes minimum one month to process the ITR. Abhishek Soni, CEO and co-founder, Tax2win.in, an ITR filing website says, "Once the ITR has been verified by the individual, the income tax department starts processing the ITR.',
    },
  ];
  const eligibility = [
    'Taxpayer having income exceeding Rs. 50 Lakhsfrom salary,profession etc',
    'Taxpayer Having foreign assets / income',
    'Taxpayer Having agricultural income in excess of Rs. 5,000',
    'Taxpayer having income under capiatal gain',
    'Taxpayer Having income from business or profession as a partner',
    'Taxpayer Having more than one house property',
    'Taxpayers having DIN or owing private limited company shares.',
  ];
  const ineligibility = [
    'Itr2 cannot be filed by LLP',
    'Itr2cannot be filled by company,society,trust,partnership etc',
    'Itr2 cannot be filled by proprietor having business or professional income',
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
                <Link href='#itrTwo-filing' title='Income tax return - 2' />
                <Link href='#itrTwo-eligibility' title='Eligibility' />
                <Link href='#itrTwo-ineligibility' title='Ineligibility' />
                <Link href='#itrTwo-pricing' title='Pricing' />
                <Link href='#itrTwo-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrTwo-filing service' id='itrTwo-filing'>
                <Typography>
                  <Title>Income tax return - 2</Title>
                  <Paragraph strong>
                    Individuals and Hindu Undivided Families who have their
                    Income for the Financial Year through Salary or Pension,
                    more than One House Property, Income from Capital Gains,
                    Income from foreign assets/Income, Income from business or
                    profession as a partner (not proprietor) and other sources
                    including lottery, racehorses, legal gambling are eligible
                    to file their IT Return using ITR-2. Individuals who are not
                    eligible to file using ITR-1, because of their income
                    exceeding ₹ 50 Lakhs are also eligible to file itr2.
                  </Paragraph>
                </Typography>
              </div>
              {/* itrTwo eligibility */}
              <div
                className='itrTwo-eligibility service'
                id='itrTwo-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-2</Title>
                    <Paragraph strong>
                      ITR-2 is filed by the taxpayers whose income is up to Rs
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
                    <img src={itrTwoEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* itrTwo ineligibility */}
              <div
                className='itrTwo-ineligibility service'
                id='itrTwo-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrTwoIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-2</Title>
                    <Paragraph strong>
                      ITR-2 is filed by the taxpayers whose income is up to Rs
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
                    <Title>Due date for filing ITR-2 online AY 2020-21</Title>
                    <Paragraph strong>
                      ITR -2 has to be filed on or before 30 Nov of the
                      following year. After that, a late fee under section 234F
                      is levied
                    </Paragraph>
                  </div>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrTwo-pricing'>
                <PricingComponent
                  dataOne={itrTwoBasic}
                  dataTwo={itrTwoStandard}
                  dataThree={itrTwoPremium}
                  basic='2320'
                  standard='3920'
                  premium='5520'
                  basicDiscount='2,900'
                  standardDiscount='4,900'
                  premiumDiscount='6,900'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='itrTwo-faq'>
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

export default ItrTwoComponent;
