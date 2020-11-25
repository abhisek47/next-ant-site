import React from 'react';
import { Layout, Row, Col, Typography, Collapse, Card, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import { CaretRightOutlined } from '@ant-design/icons';
import { pfBasic, pfStandard, pfPremium } from './PricingDetails';
import pfDocs from '../assets/pf-docs.svg';
import DocumentComponent from './DocumentComponent';

const PfComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'What happens to PF account after leaving job ?',
      details:
        'Even when you leave the job, the amount deposited in your PF account continues to earn interest. ... After retirement, you can continue to earn interest on your PF deposit if you do not withdraw.Your account will become inactive three years after retirement.There is no time limit for withdrawal of Provident Fund dues.',
    },
    {
      id: 2,
      title: 'What is the reason of PF claim rejection ?',
      details:
        'Another reason for the rejection of your EPF claim withdrawal can be due to incomplete KYC. If your KYC details are not complete and verified, then the EPFO can reject your EPF withdrawal claim.',
    },
    {
      id: 3,
      title: 'Can I withdraw pension contribution from PF ?',
      details: `To get EPS amount, in the Composite Claim Form (Aadhaar or Non-Aadhaar), along with choosing 'Final PF balance', also choose the 'pension withdrawal' option. If you plan on re-joining the workforce, you may opt to get the 'scheme certificate' by furnishing Form 10C.`,
    },
    {
      id: 4,
      title: 'Can I withdraw my PF without resigning ?',
      details: `Originally Answered: How can I withdraw my PF without resigning? You can withdraw part of your amount for various purposes like Illness, without leaving your job. If your Aadhaar and bank account is linked with your UAN you can apply online other wise apply in composite claim form for PF part withdrawal.`,
    },
    {
      id: 5,
      title: 'What happens if I do not transfer my PF ?',
      details: `A PF account becomes inoperative if the employee does not make an application for withdrawal within 36 months of retiring after attaining the age of 55 years. According to the rules, the unclaimed amount of the account which remains inoperative for 7 years is to be transferred to the Senior Citizens' Welfare Fund`,
    },
  ];
  const employee = [
    {
      case: 'Full-time employees',
      des:
        'Studies show that staffers who work from home are more productive than those who work in a typical office environment.',
    },
    {
      case: 'Part-Time Employees',
      des:
        'A part-time job is a form of employment that carries fewer hours per week than a full-time job.',
    },
    {
      case: 'Employees Working at Home',
      des:
        'A full-time job is employment in which a person works a minimum number of hours defined as such by their employer.',
    },
    {
      case: 'Contract Employees',
      des:
        'A contract employee is an individual retained by a company for a predetermined time, for a predetermined price.',
    },
    {
      case: 'Full-time Consultants',
      des:
        'A contract employee is an individual retained by a company for a predetermined time, for a predetermined price.',
    },
  ];
  const pfregType = [
    {
      id: 1,
      case: 'Compulsary Registration',
      des:
        ' The establishment employing 20 or more employees is required to obtain registration with PF department within 30 days of reaching that number. This number is irrespective of salary.',
    },
    {
      id: 2,
      case: 'Voluntary Registration',
      des:
        'The employer with the consent of its employee can also seek optional coverage for its establishment so that their employees avail the benefit of the provident fund.',
    },
    {
      id: 3,
      case: 'PF Registration',
      des:
        ' As the PF registration is required only when the number of employees reaches 20, hence ESIC registration is also necessary as is required to be obtained when the number of employee reaches 10.',
    },
  ];
  const PfDocument = [
    { id: 1, case: 'Pan card of Establishment' },
    { id: 2, case: 'Certificate of Incorporation' },
    {
      id: 3,
      case: 'Canceled cheque of Establishment',
    },
    {
      id: 4,
      case:
        'Address Proof of establishment (Rent agreement, Water/ Electricity / Telephone Bill in the name of establishment)',
    },
    {
      id: 5,
      case: 'Specimen signature of Directors and Authorised Signatories',
    },
    {
      id: 6,
      case:
        'Consent of Majority of Employees in case of voluntary registration',
    },
    {
      id: 7,
      case: 'Digital Signature of Authorized Applicant (Class-2)',
    },
  ];
  const { Title, Paragraph } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    autoplay: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#pf-filing' title='Provident fund' />
                <Link href='#pf-docs' title='Document required' />
                <Link href='#pf-employee' title='Employee' />
                <Link href='#pf-type' title='Registration type' />
                <Link href='#pf-pricing' title='Pricing' />
                <Link href='#pf-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='pf-filing service' id='pf-filing'>
                <Typography>
                  <Title>Employees provident fund registration</Title>
                  <Paragraph strong>
                    Establishment registration with employers provident fund
                    organisation (EPFO) is mandatory if the number of employees
                    exceeds 20 and may be obtained voluntarily if the employee’s
                    number is less than twenty. Our dedicated team will help you
                    to your company with EPFO.
                  </Paragraph>
                </Typography>
              </div>
              {/* documents */}
              <div className='pf-docs service' id='pf-docs'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <DocumentComponent
                      title='Documents required for provident fund registration'
                      documents={PfDocument}
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={pfDocs} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* meaning of emoloyee */}
              <div className='pf-employee service' id='pf-employee'>
                <Title>Meaning of employee</Title>
                {employee.map((item) => (
                  <Card key={item.case}>
                    <Title level={4}>{item.case}</Title>
                    <Paragraph>{item.des}</Paragraph>
                  </Card>
                ))}
              </div>
              {/* Registration type */}
              <div className='pf-type service' id='pf-type'>
                <Title>Type of registration</Title>
                <Row gutter={16} align='top'>
                  {pfregType.map((items) => (
                    <Col className='ant-col-lg-8 ant-col-sm-24' key={items.id}>
                      <Card className='box'>
                        <Title level={4}>{items.case}</Title>
                        <Paragraph>{items.des}</Paragraph>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='pf-pricing'>
                <PricingComponent
                  dataOne={pfBasic}
                  dataTwo={pfStandard}
                  dataThree={pfPremium}
                  basic='6400'
                  standard='12000'
                  premium='20800'
                  basicDiscount='8,000'
                  standardDiscount='15,000'
                  premiumDiscount='26,000'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='pf-faq'>
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

export default PfComponent;
