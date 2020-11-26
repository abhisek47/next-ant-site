import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import itrSevenEligibility from '../assets/itrSeven-eligibility.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import {
  itrSevenBasic,
  itrSevenStandard,
  itrSevenPremium,
} from './PricingDetails';

const itrSevenComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'Is DSC mandatory for ITR 7 ?',
      details:
        'While verification of ITR Form 7, the political parties are compulsory required to verify the return through digital signature certificate(DSC) by CEO or secretary, whereas other form of persons have the following options for verifying return: Through DSC(digital signature certificate)',
    },
    {
      id: 2,
      title: 'Who will sign the return of income of HUF ?',
      details:
        'Individual : The individual filing his Income Tax Return has to sign the return. In case the individual is mentally incapable, then the return may be signed by his Guardian or by any other person competent to act on his behalf.',
    },
    {
      id: 3,
      title: 'Is digital signature mandatory for ITR ?',
      details:
        'It is an easy and hassle-free process to file the IT return using the Digital Signature. ... It is mandatory for an individual, HUF, firm, LLP (if their accounts are required to be audited under the provisions of Section 44AB), political parties and companies to file the ITR using the DSC (Class 2).',
    },
    {
      id: 4,
      title: 'How HUF can earn income ?',
      details: `Since the HUF is a separate entity, it cannot earn income from salary. Further, all income that arises on the investment of the HUF's funds and utilisation of its assets is regarded as income and is separately assessed and taxed. On the income earned, the HUF is taxed on the same slab rates applicable to an individual.`,
    },
  ];
  const eligibility = [
    'All individuals who obtain income from property if said property is in the name of a trust',
    'All individuals who receive income for the sole purpose of charity or a religious offering',
    'Any political party that earns a net income that is more than the ceiling limit that is exempt from income tax',
    'Associations that carry out scientific research',
    'News organisations and companies',
    'Organisations as mentioned in Section 10(23A) and Section 10(23B)',
    'Educational institutions such as school, colleges or universities',
    'Medical institutions such as hospitals, clinics etc',
  ];
  //   const ineligibility = [
  //     'Companies are claiming an exemption u/s 11, who have Income from property held for charitable or religious purposes., then itr 6 cannot be filled.',
  //   ];
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
                <Link href='#itrSeven-filing' title='Income tax return - 7' />
                <Link href='#itrSeven-eligibility' title='Eligibility' />
                <Link href='#itrSeven-pricing' title='Pricing' />
                <Link href='#itrSeven-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='itrSeven-filing service' id='itrSeven-filing'>
                <Typography>
                  <Title>Income tax return - 7</Title>
                  <Paragraph strong>
                    ITR-7 is a form filed by those individuals and companies
                    that fall under the following sections: <br />
                    Section 139 (4A) , Section 139 (4B), Section 139 (4C),
                    Section 139 (4D)
                  </Paragraph>
                </Typography>
              </div>
              {/* #itrSeven eligibility */}
              <div
                className='itrSeven-eligibility service'
                id='itrSeven-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Eligibility to file ITR-7</Title>
                    <Paragraph strong>
                      ITR-7 is filed by the taxpayers whose income is from below
                      - mentioned sources:
                    </Paragraph>
                    <List
                      dataSource={eligibility}
                      renderItem={(item) => (
                        <List.Item>
                          <Text>
                            <span className='emoji check'>
                              <CheckCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={itrSevenEligibility} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='itrSeven-pricing'>
                <PricingComponent
                  dataOne={itrSevenBasic}
                  dataTwo={itrSevenStandard}
                  dataThree={itrSevenPremium}
                  basic='5,900'
                  standard='5,900'
                  premium='5,900'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='itrSeven-faq'>
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

export default itrSevenComponent;
