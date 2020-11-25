import { Layout, Row, Col, Card, Typography } from 'antd';
import CountUp from 'react-countup';

const StatsComponent = () => {
  const { Title, Paragraph } = Typography;
  return (
    <>
      <Layout className='statistic'>
        <Layout.Content>
          <div className='container'>
            <Row gutter={16} align='top'>
              <Col className='ant-col-xs-24 ant-col-md-6'>
                <Card data-aos='zoom-in'>
                  <div>
                    <Title className='text-light m-0'>
                      <CountUp duration={5} end={2013} />
                    </Title>
                    <Paragraph className='mt-3'>Company Established</Paragraph>
                  </div>
                </Card>
              </Col>
              <Col className='ant-col-xs-24 ant-col-md-6'>
                <Card data-aos='zoom-in' data-aos-delay='100'>
                  <div>
                    <Title className='text-light m-0'>
                      <CountUp duration={5} end={80} />
                    </Title>
                    <Paragraph className='mt-3'>Staff Members</Paragraph>
                  </div>
                </Card>
              </Col>
              <Col className='ant-col-xs-24 ant-col-md-6'>
                <Card data-aos='zoom-in' data-aos-delay='200'>
                  <div>
                    <Title className='text-light m-0'>
                      <CountUp duration={5} end={6} />
                    </Title>
                    <Paragraph className='mt-3'>Offices Available</Paragraph>
                  </div>
                </Card>
              </Col>
              <Col className='ant-col-xs-24 ant-col-md-6'>
                <Card data-aos='zoom-in' data-aos-delay='300'>
                  <div>
                    <Title className='text-light m-0'>
                      <CountUp duration={5} end={4500} />
                    </Title>
                    <Paragraph className='mt-3'>Happy Clientele</Paragraph>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default StatsComponent;
