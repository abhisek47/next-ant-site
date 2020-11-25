import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrSixEligibility from '../assets/itrSix-eligibility.svg';
import itrSixIneligibility from '../assets/itrSix-ineligibility.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from '@ant-design/icons';
import { itrSixBasic, itrSixStandard, itrSixPremium } from './PricingDetails';

const itrSixComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'What is schedule FD in ITR 6 ?',
      details:
        'Schedule FD: Break-up of payments/receipts in Foreign currency.',
    },
    {
      id: 2,
      title: 'Who can file ITR 6 ?',
      details:
        'ITR 6 - How to file ITR 6 online. As per the guidelines of income tax department, any commercial entity or a business firm or establishment that has no earnings from and the income of which does not come from any religious/charitable organization or body is mandated to use form ITR6 for filing the returns.',
    },
  ];
  const eligibility = [
    'companies that are not claiming any exemption under Section11 but if',
  ];
  const ineligibility = [
    'Companies are claiming an exemption u/s 11, who have Income from property held for charitable or religious purposes., then itr 6 cannot be filled.',
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
                <Link href='#itrSix-filing' title='Income tax return - 6' />
                <Link href='#itrSix-eligibility' title='Eligibility' />
                <Link href='#itrSix-ineligibility' title='Ineligibility' />
                <Link href='#itrSix-pricing' title='Pricing' />
                <Link href='#itrSix-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrSix-filing service' id='itrSix-filing'>
                <Typography>
                  <Title>Income tax return - 6</Title>
                  <Paragraph strong>
                    ITR Form 6 or ITR 6 is an income tax return form that is
                    used by companies to e-file income tax return if they do not
                    claim exemption under Section 11 of the Income Tax Act,
                    1961. Under existing Income Tax rules, companies that can
                    claim exemption u/s 11 are those who have income from
                    property that is held for charitable or religious purposes.
                  </Paragraph>
                </Typography>
              </div>
              {/* #itrSix eligibility */}
              <div
                className='itrSix-eligibility service'
                id='itrSix-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-6</Title>
                    <Paragraph strong>
                      ITR-6 is filed by the taxpayers from below - mentioned
                      sources:
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
                    <img src={itrSixEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* #itrSix ineligibility */}
              <div
                className='itrSix-ineligibility service'
                id='itrSix-ineligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={itrSixIneligibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Ineligibility to file ITR-6</Title>
                    <Paragraph strong>
                      ITR-6 is filed by the taxpayers from below - mentioned
                      sources:
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
              <div className='pricing service' id='itrSix-pricing'>
                <PricingComponent
                  dataOne={itrSixBasic}
                  dataTwo={itrSixStandard}
                  dataThree={itrSixPremium}
                  basic='4720'
                  standard='4720'
                  premium='4720'
                  basicDiscount='5,900'
                  standardDiscount='5,900'
                  premiumDiscount='5,900'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='itrSix-faq'>
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

export default itrSixComponent;
