import { Layout, Row, Col, Typography } from 'antd';
import Link from 'next/link';

const FooterComponent = () => {
  const footerHead = [
    {
      id: 1,
      title: 'Head Office',
      sub1: 'Kolkata, West Bengal',
      sub2: '36/A Kadapara, Kankurgachi, Kolkata-700054',
    },
    {
      id: 2,
      title: 'Andhra Pradesh Branch',
      sub1: 'Andhra Pradesh',
      sub2: '9th Phase, Rama Nilayam Road, Andhrapradesh-500072',
    },
    {
      id: 3,
      title: 'Gangtok Branch',
      sub1: 'Gangtok',
      sub2:
        'Below Supermarket (turning) M.G. Road , Gangtok, East Sikkim-737101.',
    },
    {
      id: 4,
      title: 'Siliguri Branch',
      sub1: 'Siliguri',
      sub2: 'Ward 8 , Khalpara , Siliguri - 734005',
    },
    {
      id: 5,
      title: 'Website Policies',
      sub1: 'Terms and Conditions',
      sub2: 'Refund Policy',
      link1: 'terms-and-conditions',
      link2: 'refund-policy',
    },
  ];
  const { Footer } = Layout;
  const { Paragraph } = Typography;
  return (
    <>
      <Layout className='footer'>
        <div className='container'>
          <Footer className='footer-top'>
            <Row gutter={14} style={{ alignItems: 'flex-start' }}>
              {footerHead.map((footer) => (
                <Col
                  className='ant-col-sm-24  ant-col-lg-4 ant-col-md-4'
                  key={footer.id}>
                  <div className='footer-content'>
                    <Typography>
                      <Paragraph strong level={4}>
                        {footer.title}
                      </Paragraph>

                      <Paragraph>
                        <Link href={`/${footer.link1}`}>{footer.sub1}</Link>
                      </Paragraph>
                      <Paragraph>
                        <Link href={`/${footer.link2}`}>{footer.sub2}</Link>
                      </Paragraph>
                    </Typography>
                  </div>
                </Col>
              ))}
            </Row>
          </Footer>
        </div>
        <Footer className='footer-bottom'>
          <Typography>
            <Paragraph>
              Copyright @ 2020 cilentfilingindia. all rights reserved
            </Paragraph>
          </Typography>
        </Footer>
      </Layout>
    </>
  );
};

export default FooterComponent;
