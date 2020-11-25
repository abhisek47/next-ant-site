import { Col, Layout, Row, Typography } from 'antd';
import React from 'react';
import diwali from '../assets/hfc.png';

const DiwaliComponent = () => {
  const { Title, Text } = Typography;
  const { Content } = Layout;
  return (
    <Layout
      style={{
        backgroundColor: '#001529',
      }}>
      <div className='container'>
        <div className='diwali'>
          <Row gutter={16} align='middle'>
            <Col className='ant-col-sm-24 ant-col-md-14'>
              <Typography>
                <Title data-aos='fade-up'>Celebrate Diwali</Title>
                <Text strong data-aos='fade-up' data-aos-delay='100'>
                  This year we celebrate diwali in other way. we are going to
                  make diwali full of joy and prosperous. we will invite startup
                  and entrepreneurs around world and celebrate diwali with
                  ideas.
                </Text>
              </Typography>
            </Col>
            <Col className='ant-col-sm-24 ant-col-md-10'>
              <div data-aos='zoom-in' data-aos-delay='50'>
                <img src={diwali} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default DiwaliComponent;
