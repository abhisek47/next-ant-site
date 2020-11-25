import { Layout, Typography, Row, Col, Button } from 'antd';
import Link from 'next/link';

const BannerComponent = ({ head, para, img }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <>
      <Layout>
        <Content className='banner-bg'>
          <div className='banner-container'>
            <Row gutter={16} align='middle'>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Typography>
                  <div>
                    <Title data-aos='fade-up'>{head}</Title>
                    <div data-aos='fade-up' data-aos-delay='100'>
                      <Text strong>{para}</Text>
                    </div>
                  </div>
                  <Link href='#popular'>
                    <div
                      className='mt-4'
                      data-aos='fade-up'
                      data-aos-delay='200'>
                      <Button type='primary' size='large'>
                        Explore now
                      </Button>
                    </div>
                  </Link>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <div data-aos='zoom-in' data-aos-delay='50'>
                  <img src={img} alt='banner' />
                </div>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default BannerComponent;
