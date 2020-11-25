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
                    <Title
                      data-sal='slide-up'
                      data-sal-delay='150'
                      data-sal-easing='ease-out-back'>
                      {head}
                    </Title>
                    <Text
                      strong
                      data-sal='slide-up'
                      data-sal-delay='200'
                      data-sal-easing='ease-out-back'>
                      {para}
                    </Text>
                  </div>
                  <Link href='#popular'>
                    <div
                      className='mt-4'
                      data-sal='slide-up'
                      data-sal-delay='200'
                      data-sal-easing='ease-out-back'>
                      <Button type='primary' size='large'>
                        Explore now
                      </Button>
                    </div>
                  </Link>
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <img src={img} alt='banner' />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default BannerComponent;
