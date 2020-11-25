import { Layout, Row, Col, Typography, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import { CaretRightOutlined } from '@ant-design/icons';
import { tcsBasic, tcsStandard, tcsPremium } from './PricingDetails';

const TcsComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'Does this also apply to the supply of services ?',
      details: `Services have been kept away from this provision. Therefore, this provision is not applicable to the payment of consideration received in relation to supply of services.`,
    },
    {
      id: 2,
      title:
        'Will these TCS provisions also apply to the advance received in respect of goods ?',
      details: `Yes, these provisions are applicable to the “amount” received in connection with the sale and if any advance related to it is received on or after October 1, 2020 then the provisions of TCS will also be applicable. But one thing to keep in mind that even if the advance amount is received before October 1, 2020 and the supply is made on or after October 1, 2020 then TCS is not required to be collected because no amount is received on or after 1 st . Oct. 2020.`,
    },
    {
      id: 3,
      title: `If the sale is before october 1, 2020 and payment is due on or after october 1, 2020, what will be TCS’s position in this case ?`,
      details: `Now you have already been told that this provision is payment based and if payment is received on or after October 1, 2020 then the provisions of TCS will apply to it though sale is made before this date.`,
    },
    {
      id: 4,
      title: `When to deposit TCS after collecting it from the buyers ?`,
      details: `The responsibility for payment of TCS will be on receipt of payment from the buyer and you have to deposit it to the government on the 7th day of the end of the month in which you receive the payment. For example, if you receive payment in October 2020, then you have to pay its TCS by 7 November 2020.`,
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
                <Link href='#tds-filing' title='TCS filing' />
                <Link href='#tds-pricing' title='Pricing' />
                <Link href='#tds-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='tds-filing service' id='tds-filing'>
                <Typography>
                  <Title>What is tax collected at source ?</Title>
                  <Paragraph strong>
                    The new provisions of TCS have come into force with effect
                    from 1 October 2020 and according to it if your turnover is
                    more than 10 crores in the previous financial  year i.e. the
                    year ended 31 March 2020, then this year you will have to
                    collect and deposit TCS on your receipts from sale of goods
                    from such buyers from whom you received more than Rs. 50
                    Lakhs as sale consideration during the current Financial
                    year. The TCS is payable on the amount of receipt which is
                    greater than 50 Lakhs and received after 1 st . Oct. 2020.
                    The rate of TCS is 0.01% and Presently due to corona
                    Pandemic 25% discount has been given in this tax rate till
                    31 March 2021 and its effective rate is 0.075%.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='tds-pricing'>
                <PricingComponent
                  dataOne={tcsBasic}
                  dataTwo={tcsStandard}
                  dataThree={tcsPremium}
                  basic='1199'
                  standard='1999'
                  premium='3919'
                  basicDiscount='1,499'
                  standardDiscount='2,499'
                  premiumDiscount='4,899'
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

export default TcsComponent;
