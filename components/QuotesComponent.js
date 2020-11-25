import { useEffect } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import director from '../assets/chief@2x.png';

const QuotesComponent = () => {
  const { Title, Paragraph, Text } = Typography;
  return (
    <>
      <Layout className='quotes'>
        <div className='container'>
          <Row gutter={16} align='middle'>
            <Col className='ant-col-sm-24 ant-col-lg-16 ant-col-md-12'>
              <Typography>
                <div>
                  <Title className='quotes-head' data-aos='fade-up'>
                    PAN India services
                  </Title>
                </div>
                <div>
                  <Paragraph
                    className='quotes-para'
                    data-aos='fade-up'
                    data-aos-delay='100'>
                    We have over 8+ years of corporate and consulting experience
                    with top firms. Our network includes experienced Chartered
                    Accountants, Company Secretaries, Lawyers, Cost Accountants
                    and many more. We help startup in compliances and assists in
                    ROC filing, GST filing, Income Tax filing, and in getting
                    various certificates like IPR, FSSAI, IEC etc . We help and
                    assist clients in legal compliances and keep the burden of
                    compliances with us for ease of focusing on business.
                  </Paragraph>
                </div>
                <div data-aos='fade-up' data-aos-delay='150'>
                  <Paragraph strong className='ceo'>
                    Uday Prakash Choudhary
                  </Paragraph>
                  <Text>Chief executive officer</Text>
                </div>
              </Typography>
            </Col>
            <Col className='ant-col-sm-24 ant-col-lg-8 ant-col-md-12'>
              <div data-aos='zoom-in' data-aos-delay='50'>
                <img src={director} className='director-img' alt='director' />
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default QuotesComponent;
