import { Layout, Row, Col, Card, Typography } from 'antd';
// import {
//   HeartFilled,
//   MessageFilled,
//   SafetyCertificateFilled,
// } from '@ant-design/icons';
import one from '../assets/lamp.png';
import two from '../assets/lightning.png';
import three from '../assets/lock.png';

const SupportComponent = () => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <Layout className='support' style={{ background: '#001529' }}>
        <div className='container'>
          <Row gutter={16}>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-8'>
              <Card>
                <Typography>
                  <div>
                    <Title className='support-team'>
                      <img src={one} alt='team' data-aos='zoom-in' />
                    </Title>
                    <Title level={3}>Vibrant Team</Title>
                    <Paragraph>
                      A talented workforce that works in collaboration with a
                      network of over 6000+ Professionals.
                    </Paragraph>
                  </div>
                </Typography>
              </Card>
            </Col>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-8'>
              <Card>
                <Typography>
                  <div>
                    <Title className='support-time'>
                      <img
                        src={two}
                        alt='time'
                        data-aos='zoom-in'
                        data-aos-delay='100'
                      />
                    </Title>
                    <Title level={3}>Customer Support</Title>
                    <Paragraph>
                      Our team is available from 10 am - 6 pm, except sunday and
                      government holidays.
                    </Paragraph>
                  </div>
                </Typography>
              </Card>
            </Col>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-8'>
              <Card>
                <Typography>
                  <div>
                    <Title className='support-payment'>
                      <img
                        src={three}
                        alt='payment'
                        data-aos='zoom-in'
                        data-aos-delay='200'
                      />
                    </Title>
                    <Title level={3}>Secure Payment</Title>
                    <Paragraph>
                      Easily pay online with EMI payments, credit or debit card,
                      net banking, PayPal and more.
                    </Paragraph>
                  </div>
                </Typography>
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default SupportComponent;
