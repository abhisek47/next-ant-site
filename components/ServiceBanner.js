import { Layout, Typography, List, Row, Col } from 'antd';
import FormComponent from './FormComponent.js';
import RatingComponent from './RatingComponent.js';
import { CheckCircleFilled } from '@ant-design/icons';

const ServiceBanner = ({ head, img, tagline, services, id }) => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <>
      <Layout>
        <Content
          className='service-banner'
          style={{ background: 'ghostWhite' }}>
          <div className='service-container'>
            <Row gutter={24}>
              <Col className='ant-col-sm-24 ant-col-md-8'>
                <div className='service-model'>
                  <img src={img} alt='banner' />
                </div>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-8'>
                <Typography style={{ margin: '5px 12px' }}>
                  <Title level={3}>{head}</Title>
                  <RatingComponent />
                  <List
                    dataSource={services}
                    renderItem={(item) => (
                      <List.Item style={{ margin: '8px 0', padding: '10px 0' }}>
                        <Text>
                          <span className='emoji check'>
                            <CheckCircleFilled />
                          </span>
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Typography>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-8'>
                <FormComponent id={id} tagline={tagline} />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default ServiceBanner;
