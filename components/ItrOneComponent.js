import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrOneEligibility from '../assets/itrOne-eligibility.svg';
import itrOneIneligibility from '../assets/itrOne-ineligibility.svg';
import {
  CaretRightOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
} from '@ant-design/icons';
import { itrOneBasic, itrOneStandard, itrOnePremium } from './PricingDetails';

const ItrOneComponent = () => {
  const tab1 = [
    // nedd to change
    {
      id: 1,
      title: 'What is a return of income ?',
      details:
        '​ITR stands for Income Tax Return​. It is a prescribed form through which the particulars of income earned by a person in a financial year and taxes paid on such income are communicated to the Income-tax Department. It also allows carry -forward of loss and claim refund from income tax department.​Different forms of returns of income are prescribed for filing of returns for different Status and Nature of income. These forms can be downloaded from www.incometaxindia.gov.in',
    },
    {
      id: 2,
      title: 'What are the benefits of filing my return of income?',
      details:
        'Filing of return is your duty and earns for you the dignity of consciously contributing to the development of the nation. Apart from this, your income-tax returns validate your credit worthiness before financial institutions and make it possible for you to access many financial benefits such as bank credits, etc.​​',
    },
    {
      id: 3,
      title:
        'Is it necessary to file return of income when I do not have any positive income ?',
      details:
        '​​If you have sustained a loss in the financial year, which you propose to carry forward to the subsequent year for adjustment against subsequent year(s) positive income, you must make a claim of loss by filing your return before the due date. ​​',
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
    'Taxpayers whose income from agriculture means is greater than Rs. 5,000',
    'The taxpayer who claims relief for foreign taxes paid or claim double taxation relief as mentioned in section 90/90A/91.',
    'ITR 1 cannot be used by residents having any asset (including financial interest in any entity) located outside India or signing authority in any account located outside India.',
    'Form ITR-1 can no longer be filed by an individual who has brought forward/carry forward loss under the head “Income from house property.”',
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
                <Link href='#itrOne-filing' title='Income tax return - 1' />
                <Link href='#itrOne-eligibility' title='Eligibility' />
                <Link href='#itrOne-ineligibility' title='Ineligibility' />
                <Link href='#itrOne-pricing' title='Pricing' />
                <Link href='#itrOne-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrOne-filing service' id='itrOne-filing'>
                <Typography>
                  <Title>Income tax return - 1</Title>
                  <Paragraph strong>
                    ITR 1 - This Form is filed by the taxpayers and the
                    individuals being a Resident (other thanNot Ordinarily
                    Resident) having Total Income up to INR 50 lakhs, having
                    Income from Salaries, One House Property, Other Sources
                    (Interest etc.), and Agricultural Income up to INR 5
                    thousand. (Not for an Individual who is either Director in a
                    company or has invested in Unlisted Equity Shares).
                  </Paragraph>
                </Typography>
              </div>
              {/* itrOne eligibility */}
              <div
                className='itrOne-eligibility service'
                id='itrOne-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-1</Title>
                    <Paragraph strong>
                      ITR-1 is filed by the taxpayers whose income is up to Rs
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
                    <img src={itrOneEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* itrOne ineligibility */}
              <div
                className='itrOne-ineligibility service'
                id='itrOne-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrOneIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title> Ineligibility to file ITR-1</Title>
                    <Paragraph strong>
                      ITR-1 is filed by the taxpayers whose income is up to Rs
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
                    <Title>Due date for filing ITR-1 online AY 2020-21</Title>
                    <Paragraph strong>
                      ITR -1 has to be filed on or before 30 Nov of the
                      following year. After that, a late fee under section 234F
                      is levied
                    </Paragraph>
                  </div>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrOne-pricing'>
                <PricingComponent
                  dataOne={itrOneBasic}
                  dataTwo={itrOneStandard}
                  dataThree={itrOnePremium}
                  basic='2,900'
                  standard='3,900'
                  premium='4,900'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='itrOne-faq'>
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

export default ItrOneComponent;
