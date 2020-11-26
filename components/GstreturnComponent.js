import {
  Layout,
  Row,
  Col,
  Typography,
  List,
  Collapse,
  Card,
  Anchor,
} from 'antd';
import PricingComponent from './PricingComponent';
import gstrCase from '../assets/gstrCases.svg';
import { CaretRightOutlined, CheckCircleFilled } from '@ant-design/icons';
import TableComponent from './TableComponent';
import gstrType from '../assets/gstr-type.svg';
import {
  gstReturnBasic,
  gstReturnStandard,
  gstReturnPremium,
} from './PricingDetails';

const GstreturnComponent = () => {
  const columns = [
    {
      title: 'Type of GST Return',
      dataIndex: 'name',
      render: (text) => (
        <Paragraph strong style={{ color: '#1890ff' }}>
          {text}
        </Paragraph>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Due Dates',
      dataIndex: 'duedates',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'GSTR - 1',
      description:
        'Outward return (Details about your sales/ Supplies made during month)',
      duedates: '10 th  of next month',
    },
    {
      key: '2',
      name: 'GSTR - 2',
      description:
        'Inward return (Details about your purchases made during month)',
      duedates: '15 th  of next month',
    },
    {
      key: '3',
      name: 'GSTR - 3',
      description:
        'Month return (for cumulative records of inward and outward made during month',
      duedates: '20 th  of next month',
    },
    {
      key: '4',
      name: 'GSTR - 4',
      description:
        'A return by Composite dealer (a person availing such service with supplies Rs. 50 lakh)',
      duedates: '18 th  of next quarter',
    },
    {
      key: '5',
      name: 'GSTR - 5',
      description: 'Monthly return by Non resident taxable person',
      duedates: '13 th  of next month',
    },
    {
      key: '6',
      name: 'GSTR - 6',
      description: 'Monthly return by input service distributor',
      duedates: '13 th  of next month',
    },
    {
      key: '7',
      name: 'GSTR - 7',
      description: 'Person who are required to deduct TDS',
      duedates: '10 th  of next month',
    },
    {
      key: '8',
      name: 'GSTR - 8',
      description: 'E-commerce market places who are required to deduct TDS',
      duedates: '18 th  of next quarter',
    },
    {
      key: '9',
      name: 'GSTR - 9',
      description: 'Annual Return',
      duedates: '30 th september of next financial year.',
    },
  ];
  const tab1 = [
    {
      id: 1,
      title:
        'Whether data for GSTR-3B will prevail over GSTR-1 for reporting in GSTR-9 ?',
      details:
        'As per clarifications/press release, Irrespective of when the supply was declared in FORM GSTR-1, the principle of declaring a supply in Pt. II or Pt. V is essentially driven by when tax was paid through FORM GSTR-3B in respect of such supplies. Hence for the purpose of Reporting in GSTR 9, data as reported in GSTR 3B will prevail over GSTR 1.',
    },
    {
      id: 2,
      title: 'Is filing GSTR-9 mandatory ?',
      details:
        'Yes, filing annual returns in form GSTR 9 is mandatory for all registered taxpayers who come under the normal scheme. however if turnover less than 2 crores it is optional',
    },
    {
      id: 3,
      title:
        'If a taxpayer has been a composition taxpayer for one part of the financial and a normal taxpayer for the other part of the financial year, is s/he required to file GSTR 9 or GSTR 9A?',
      details:
        'A taxpayer who has been a composition taxpayer and a normal taxpayer for different parts of the financial year is required to file both forms GSTR 9 and GSTR 9A for the respective periods. Such a taxpayer should furnish form GSTR 9 for the period s/he was a regular taxpayer, and form GSTR 9A for the period s/he was a composition taxpayer in the said financial year.',
    },
    {
      id: 4,
      title:
        'Can a taxpayer file GSTR 9 in case his/her registration got cancelled for the respective financial year ?',
      details:
        'Yes, Form GSTR 9 is to be filed by the taxpayer even if his/her registration was cancelled during the respective financial year.',
    },
    {
      id: 5,
      title:
        'If a taxpayer opts for the composition scheme during a financial year, is s/he required to file GSTR 9 ?',
      details:
        'Every taxpayer who has opted for the composition scheme during the financial year is required to furnish GSTR 9 for the time period for which s/he was a normal taxpayer.',
    },
    {
      id: 6,
      title:
        'If a taxpayer opts out of the composition scheme during a financial year, is s/he required to file GSTR 9 ?',
      details:
        'Every taxpayer who has opted out of the composition scheme during the financial year is required to furnish GSTR 9 for the time period for which s/he has been a normal taxpayer.',
    },
  ];
  const gstreturnCaseOne = [
    'Taxpayers opting composition scheme (They must file GSTR-9A)',
    'Casual taxable person under GST',
    'Person with turnover less than 2 crores',
    'Non resident taxable person under GST law explained',
    'Persons paying TDS under section 51 of CGST Act',
  ];
  const gstReturnCasesTwo = [
    {
      id: 1,
      head: 'GSTR-9',
      case:
        'All entities having GST registration are required to file GST annual return in form GSTR- 9.',
    },
    {
      id: 2,
      head: 'GSTR-9A',
      case:
        'GST registered taxpayers who have opted for the GST Composition Scheme under Goods and Services Tax(GST) are required to file GSTR- 9A.',
    },
    {
      id: 3,
      head: 'GSTR-9C',
      case:
        'Form GSTR 9C is meant for filing the reconciliation statement of taxpayers pertaining to a particular financial year.The form is a statement of reconciliation between the Annual Returns in GSTR - 9and the figures mentioned in the Audited Financial Statements of the taxpayer. GSTR 9C is applicable to taxpayers who are required to obtain an annual GST audit of their accounts.GSTR - 9C must be prepared and certified by a Chartered Accountant or Cost Accountant.GST audit is applicable for person having GST registration with an annual aggregate turnover of above Rs. 5 crores',
    },
  ];
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
                <Link href='#gstr-filing' title='GST Return' />
                <Link href='#gstr-cases' title='Eligibility' />
                <Link href='#gstr-type' title='GST Return Type' />
                <Link href='#gstr-pricing' title='Pricing' />
                <Link href='#gst-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='gstr-filing service' id='gstr-filing'>
                <Typography>
                  <Title>GST return filing</Title>
                  <Paragraph strong>
                    A return is a document containing details of income which a
                    taxpayer is required to file with the tax administrative
                    authorities. This is used by tax authorities to calculate
                    tax liability.
                  </Paragraph>
                  <Paragraph strong>
                    Under GST, a registered dealer has to file GST returns that
                    include: Purchases, Sales, Output GST (On sales), Input tax
                    credit (GST paid on purchases) To file GST returns, GST
                    compliant sales and purchase invoices are required.
                  </Paragraph>
                </Typography>
              </div>
              {/* mandatory cases */}
              <div className='gst-cases service' id='gstr-cases'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Who should file GSTR-9, the annual return ?</Title>
                    <Paragraph strong>
                      All taxpayers/taxable persons registered under GST must
                      file their GSTR 9. However, the following are NOT required
                      to file GSTR 9:
                    </Paragraph>
                    <List
                      dataSource={gstreturnCaseOne}
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
                    <img src={gstrCase} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* gstr - 9 */}
              <div className='gstr-type service' id='gstr-type'>
                <TableComponent
                  title='What are the different types of GST returns?'
                  para='Here is a list of all the returns to be filed as prescribed under the GST law along with the due dates. As per the CGST act subject to changes by CBIC Notifications'
                  columns={columns}
                  data={data}
                />
                <Row align='middle' gutter={16}>
                  <Col className='ant-col-lg-24 ant-col-sm-24'>
                    {gstReturnCasesTwo.map((cases) => (
                      <Card key={cases.id} className='box'>
                        <Col className='ant-col-lg-24'>
                          <Title level={4}>{cases.head}</Title>
                          <Paragraph strong>{cases.case}</Paragraph>
                        </Col>
                      </Card>
                    ))}
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='gstr-pricing'>
                <PricingComponent
                  dataOne={gstReturnBasic}
                  dataTwo={gstReturnStandard}
                  dataThree={gstReturnPremium}
                  basic='2,899'
                  standard='4,899'
                  premium='6,899'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='gst-faq'>
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

export default GstreturnComponent;
