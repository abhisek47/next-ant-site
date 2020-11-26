import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import gstrCase from '../assets/gstrCases.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import tdsElegibility from '../assets/tds.svg';
import { tdsBasic, tdsStandard, tdsPremium } from './PricingDetails';

const TdsComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'What are the duties of the person deducting tax at source ?',
      details:
        'Following are the basic duties of the person who is liable to deduct tax at source. - He shall obtain Tax Deduction Account Number and quote the same in all the documents pertaining to TDS, He shall deduct the tax at source at the applicable rate. He shall pay the tax deducted by him at source to the credit of the Government (by the due date specified in this regard), He shall file the periodic TDS statements, i.e., TDS return (by due date specified in this regard),He shall issue the TDS certificate to the payee in respect of tax deducted by him (by the due date specified in this regard), Refer tax calendar for the due dates',
    },
    {
      id: 2,
      title:
        'How can I know the quantum of tax deducted from my income by the payer ?',
      details:
        'To know the quantum of the tax deducted by the payer, you can ask the payer to furnish you a TDS certificate in respect of tax deducted by him. You can also use the “View Your Tax Credit” facility available at www.incometaxindia.gov.in',
    },
    {
      id: 3,
      title: 'What to do if the TDS credit is not reflected in Form 26AS ?',
      details:
        '​​​Non-reflection of TDS credit in Form 26AS can be due to several reasons like non-filing of TDS statement by the payer, quoting incorrect PAN of the deductee in the TDS statement filed by the payer. Thus, in case of non-reflection of TDS credit in Form 26AS, the payee has to contact the payer for ascertaining the correct reasons for non-reflection of the TDS credit in Form 26AS.​',
    },
    {
      id: 4,
      title:
        'I have not received TDS certificate from the deductor. Can I claim TDS in my return of income ?',
      details:
        '​​​Yes, the tax credit in your case will be reflected in your Form 26AS and, hence, you can check Form 26AS and claim the credit of the tax accordingly. However, the claim of TDS to be made in your return of income should be strictly as per the TDS credit being reflected in Form 26AS. If there is any discrepancy in the tax actually deducted and the tax credit being reflected in Form 26AS then you should intimate the same to the deductor and should reconcile the difference. The credit granted by the Income-tax Department will be as per Form 26AS.',
    },
    {
      id: 5,
      title:
        'If I buy any land/building then is there any requirement to deduct tax from the sale proceeds to be paid by me to the seller ?',
      details:
        'Yes, Finance Act, 2013 has introduced section 194-IA which provides for deduction of tax at source in case of payment of sale consideration of immovable property (other than rural agricultural land) to a resident. S​ection 194-IA is not applicable if the seller is a non-resident. Tax is to be deducted @ 1%. No tax is to be deducted if the consideration is below Rs. 50,00,000. If the sale consideration exceeds Rs. 50,00,000, then tax is to be deducted on the entire amount and not only on the amount exceeding Rs. 50,00,000. If the seller is a non-resident then tax is be deducted under section 195 and not under section 194-IA. Thus, in case of purchase of property from non-resident TDS provisions of section 195​ will apply and not of section 194-IA',
    },
    {
      id: 6,
      title: `How much TDS will be deducted in case of payment of Remuneration to company's director ?`,
      details:
        '​​​​Sec 194J levies TDS on technical and professional services. As per the provisions of the Companies Act, director of the company is also a manager and thus, a technical personnel. As per Section 194J(1)(ba), any payment made to director in the nature of sitting fees, remuneration or any other sum other than those on which tax deductible under section 192 is to be considered for deduction of tax at source @ 10% under secti​on 194J. Further, there is no threshold limit for deduction of tax at source.',
    },
  ];
  const tdsFormTypes = [
    'Form 24Q -TDS on salaries',
    'Form 26Q – TDS on payments other than salaries',
    'Form 27Q – TDS on payments made to non-residents',
    'Form 27EQ – TCS',
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
                <Link href='#tds-filing' title='TDS filing' />
                <Link href='#tds-type' title='Form type' />
                <Link href='#tds-cases' title='Eligibility' />
                <Link href='#tds-delay' title='Delays and late fine' />
                <Link href='#tds-pricing' title='Pricing' />
                <Link href='#tds-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='tds-filing service' id='tds-filing'>
                <Typography>
                  <Title>What is TDS ?</Title>
                  <Paragraph strong>
                    a person (deductor) who is liable to make payment of
                    specified nature to any other person (deductee) shall deduct
                    tax at source and remit the same into the account of the
                    Central Government. The deductee from whose income tax has
                    been deducted at source would be entitled to get credit of
                    the amount so deducted on the basis of Form 26AS or TDS
                    certificate issued by the deductor.
                  </Paragraph>
                </Typography>
              </div>
              {/* tds form type */}
              <div className='tds-type service' id='tds-type'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Different types of TDS forms are as follows</Title>
                    <List
                      dataSource={tdsFormTypes}
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
                    <img src={gstrCase} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* tds eligibility */}
              <div className='tds-cases service' id='tds-cases'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={tdsElegibility}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Who will file return</Title>
                    <Paragraph strong>
                      It is the duty of the person who is making payment to
                      someone for specified goods or services to deduct TDS and
                      file TDS return. The specified payment includes salary,
                      interest, commission, brokerage, professional fees,
                      royalty, contract payments, etc. The person who deducts
                      TDS is called deductor and the person whose tax is being
                      deducted is called deductee.
                    </Paragraph>
                    <Paragraph strong>
                      TDS is not required to be deducted by Individuals and HUF
                      except for those whose accounts are required to be audited
                      u/s 44AB i.e. whose gross receipts in preceding financial
                      year in case of business is more than 2 crore (AY
                      2017-2018) or 1 crore ( AY 2016-2017) and in case of
                      profession 50 lakhs ( AY 2017-2018) or 25 lakhs (AY
                      2016-2017).
                    </Paragraph>
                  </Col>
                </Row>
              </div>
              {/* tds delays */}
              <div className='tds-delay service' id='tds-delay'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-24 ant-col-sm-24'>
                    <Title>Delays</Title>
                    <Paragraph strong>
                      After depositing TDS, the challan provided by the OLTAS
                      system takes 2-3 days to be processed. So make sure to
                      deposit TDS at least 3-4 days before the 15th deadline to
                      avoid paying late fees.
                    </Paragraph>
                  </Col>
                  <Col className='ant-col-lg-24 ant-col-sm-24'>
                    <Title>Late fine</Title>
                    <Paragraph strong>
                      Late filing fees under section 234E As per section 234E,
                      where a person fails to file the TDS/TCS return on or
                      before the due date prescribed in this regard, then he
                      shall be liable to pay, by way of fee, a sum of Rs. 200
                      for every day during which the failure continues. The
                      amount of late fees shall not exceed the amount of TDS.
                      TDS/TCS return cannot be filed without payment of late
                      filing fees as discussed above. In other words, the late
                      filing fees shall be deposited before filing the TDS
                      return. It should be noted that Rs. 200 per day is not
                      penalty but it is a late filing fee.
                    </Paragraph>
                  </Col>
                </Row>
              </div>
              {/* tds rates */}
              {/* Pricing info */}
              <div className='pricing service' id='tds-pricing'>
                <PricingComponent
                  dataOne={tdsBasic}
                  dataTwo={tdsStandard}
                  dataThree={tdsPremium}
                  basic='1,499'
                  standard='2,499'
                  premium='4,899'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='tds-faq'>
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

export default TdsComponent;
