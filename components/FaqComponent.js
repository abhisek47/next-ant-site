import { Layout, Row, Col, Typography, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const FaqComponent = () => {
  const { Title } = Typography;
  const { Panel } = Collapse;
  const tab1 = [
    {
      id: 1,
      title: 'How to get a company registered ?',
      details:
        'Picking the right company structure for your business is as important as any other business-related activity. The right business structure will allow your enterprise to operate efficiently and meet your required business targets. In India, every business must register themselves as part of the mandatory legal compliance. Before we learn how to register a company, let’s try and understand the types of business structures in India.',
    },
    {
      id: 2,
      title: 'What is trademark registration ?',
      details:
        'A trademark is a type of intellectual property consisting of a recognizable sign, design, or expression which identifies products or services of a particular source from those of others, although trademarks used to identify services are usually called service marks.',
    },
    {
      id: 3,
      title: 'What is import export code registration ?',
      details:
        'In this age of cut- throat competition, everyone wants to grow their business beyond the limits of the domestic market.However, doing business globally isn’t just a cup of tea for everyone.Before going global, you need to follow several procedures and laws in place and get different registration and license.IEC(Import Export Code) license is one of such prerequisite when you’re thinking of importing or exporting from India.',
    },
  ];
  const tab2 = [
    {
      id: 1,
      title: 'What is GST9 ?',
      details:
        'The Government of India has made it mandatory to file GST9 if turnover of previous year exceeds 2 crores and 9C is mandated if turnover of assessee exceeds 5 crores.',
    },
    {
      id: 2,
      title: 'What Exactly is ISO Certified ? And Why Does it Matter ?',
      details:
        'ISO certification certifies that a management system, manufacturing process, service, or documentation procedure has all the requirements for standardization and quality assurance. ISO (International Organization for Standardization) is an independent, non-governmental, international organization that develops standards to ensure the quality, safety, and efficiency of products, services, and systems.',
    },
    {
      id: 3,
      title: 'What is ESI registration ?',
      details:
        'ESI stands for Employee State Insurance managed by the Employee State Insurance Corporation which is an autonomous body created by the law under the Ministry of Labour and Employment, Government of India. This scheme is started for Indian workers.The workers are provided with a huge variety of medical, monetary and other benefits from the employer.Any Company having more than 10 employees(in some states it is 20 employees) who have a maximum salary of Rs. 15000/- has to mandatorily register itself with the ESIC.',
    },
  ];
  return (
    <>
      <Layout className='faq'>
        <div className='container'>
          <Typography>
            <Title
              className='faq-head'
              data-aos='fade-up'
              data-aos-duration='600'>
              Frequently asked questions
            </Title>
            <Row gutter={16}>
              <Col className='ant-col-sm-24 ant-col-md-12 '>
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1', '2']}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className='site-collapse-custom-collapse'
                  style={{ backgroundColor: 'ghostwhite' }}>
                  {tab1.map((tab) => (
                    <Panel
                      header={tab.title}
                      key={tab.id}
                      className='site-collapse-custom-panel'>
                      <p>{tab.details}</p>
                    </Panel>
                  ))}
                </Collapse>
              </Col>
              <Col className='ant-col-sm-24 ant-col-md-12'>
                <Collapse
                  bordered={false}
                  defaultActiveKey={['1', '2']}
                  expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  className='site-collapse-custom-collapse'>
                  {tab2.map((tab) => (
                    <Panel
                      header={tab.title}
                      key={tab.id}
                      className='site-collapse-custom-panel'>
                      <p>{tab.details}</p>
                    </Panel>
                  ))}
                </Collapse>
              </Col>
            </Row>
          </Typography>
        </div>
      </Layout>
    </>
  );
};

export default FaqComponent;
