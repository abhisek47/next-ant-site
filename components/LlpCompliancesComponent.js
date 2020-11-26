import { Layout, Row, Col, Typography, Collapse, Anchor } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PricingComponent from './PricingComponent';
import {
  llpCompliancesBasic,
  llpCompliancesStandard,
  llpCompliancesPremium,
} from './PricingDetails';

const LlpCompliancesComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'Can partnership be converted to LLP ?',
      details:
        'Yes, an existing partnership firm can be converted into LLP by complying with the Provisions of clause 58 and Schedule II of the LLP Act. Form 17 needs to be filed along with Form 2 for such conversion and incorporation of LLP.',
    },
    {
      id: 2,
      title: 'What happens to an LLP when a partner dies ?',
      details:
        'In case of the death of the partner, a LLP will continue with other partners. The legal heirs of LLP will get the profit/contribution of the deceased partner. They are not entitled to become a partner of the LLP unless a LLP agreement can provide the same. ... Body corporate can be a partner of a LLP.',
    },
    {
      id: 3,
      title: 'Who cannot partner in LLP ?',
      details:
        'It is clarified that as per section 5 of LLP Act, 2008 only an individual or body corporate may be a partner in a Limited Liability Partnership. An HUF cannot be treated as a body corporate for the purposes of LLP Act, 2008. Therefore, a HUF or its Karta cannot become designated partner in LLP.',
    },
    {
      id: 4,
      title: 'Is MOA and AOA required for LLP ?',
      details:
        'Unlike limited companies LLPs do not have memorandum or articles of association. Limited Liability Partnerships do not need to provide a copy of their Limited Liability Partnership Agreement to Companies House.',
    },
  ];
  const { Title, Paragraph } = Typography;
  const { Panel } = Collapse;
  const { Link } = Anchor;
  return (
    <>
      <Layout>
        <div className='gst-main'>
          <Row gutter={16}>
            <Col className='ant-col-md-8 ant-col-lg-6'>
              <Anchor className='gst-tab-link'>
                <Link href='#llpCompli-reg' title='Compliances for LLP' />
                <Link href='#llpCompli-pricing' title='Pricing' />
                <Link href='#llpCompli-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='llpCompli-reg service' id='llpCompli-reg'>
                <Typography>
                  <Title>
                    Annual compliances for limited liability partnership
                  </Title>
                  <Paragraph strong>
                    A Limited Liability Partnership enjoys a separate status.
                    Thus, an organization needs to maintain its active status by
                    regularly filing with the Ministry of Corporate Affairs
                    (MCA). Annual compliance filing is mandatory for any LLP,
                    whether having a business or not. Annual compliance for LLP
                    requires filing two separate forms. One of which is for
                    Annual Return, whereas another one is for Statement of
                    Accounts and Solvency.
                  </Paragraph>
                  <Paragraph strong>
                    The forms are filed for reporting the activities and
                    financial data for each financial year in the upcoming year.
                    The failure to fulfill LLP Annual Compliance requirements
                    levies an additional fee of ₹ 100 each day of a delay till
                    the actual date of filing. Hence, apart from the mandate,
                    the heavy penalty compels the Designated Partners to fulfill
                    the requirements.
                  </Paragraph>
                </Typography>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='llpCompli-pricing'>
                <PricingComponent
                  dataOne={llpCompliancesBasic}
                  dataTwo={llpCompliancesStandard}
                  dataThree={llpCompliancesPremium}
                  basic='30,000'
                  standard='40,000'
                  premium='50,000'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='llpCompli-faq'>
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

export default LlpCompliancesComponent;
