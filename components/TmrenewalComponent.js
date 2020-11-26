import { Layout, Row, Col, Typography, List, Collapse, Anchor } from 'antd';
import PricingComponent from './PricingComponent';
import tdrenewalRequired from '../assets/tdrenewal-required.svg';
import tdrenewalDocs from '../assets/tdrenewal-docs.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  EditFilled,
} from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
// import TableComponent from './TableComponent';
import {
  tmrenewBasic,
  tmrenewStandard,
  tmrenewPremium,
} from './PricingDetails';

const TmrenewalComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How often must a trademark be renewed ?',
      details:
        ' As part of the trademark renewal process, every 10 years thereafter, the owner will need to similarly provide proof of usage and a declaration—unless the trademark is to go abandoned.Understanding trademark maintenance requires understanding what a trademark is.',
    },
    {
      id: 2,
      title: 'What is the validity of a trademark ?',
      details:
        'Once registered, a trademark is protected for 10 years starting from the registration date, assuming that the trademark is not subsequently invalidated or cancelled. Protection can be renewed for further 10-year periods.',
    },
    {
      id: 3,
      title: 'Can trademarks last indefinitely ?',
      details:
        'Unlike copyrights and patents, trademark rights can last indefinitely as long as the owner continues to use the mark to identify its goods or services. The term of a federal trademark is 10 years, with 10-year renewal terms. ... The USPTO does not remind the trademark owner of this deadline.',
    },
    {
      id: 4,
      title: 'How do I get an expired trademark ?',
      details:
        'To claim the dead trademark you will need to complete an application with the USPTO. Provide your name and address, the name of the dead mark, a statement as to the goods and services that you wish to sell under the mark and a statement as to whether you have attempted to register the mark previously.',
    },
    {
      id: 5,
      title: 'What activities qualify as trademark infringement ?',
      details:
        'To prevail on a claim of trademark infringement, a plaintiff must establish that it has a valid mark entitled to protection; and that the defendant used the same or a similar mark in commerce in connection with the sale or advertising of goods or services without the plaintiffs consent.',
    },
  ];
  const eligibility = [
    'This form can be filed on or before 6(six) months from the date of expiration of 10 years.',
    'If no application for renewal is made within one or three months beforeexpiration, the registrar shall send a notice to the owner regarding renewal purpose.A trademark cannot be ceased unless a notice has been served. Governmental fee for renewal along with FORM(TM - 12) is to be submitted.',
    'In case the owner forgets to renew the trademark by the expiration person and the mark expires.The owner can apply for restoration of the trademark by filing FORM(TM- 13).He can do so, from six months to one year after the expiration of such registration.',
    'After receiving the application for either renew or restoring, the Registrar shall advertise the mark and wait for objections if raised.',
    'After the expiry of a waiting period, if no objection raised, once again the mark will be entered into the journal.',
  ];
  const tmrenewalDocument = [
    { id: 1, case: 'Copy of the registration certificate' },
    { id: 2, case: 'Power of attorney' },
    { id: 3, case: 'Identity proof of the applicant' },
    { id: 4, case: 'Address of the applicant' },
    { id: 5, case: 'A copy of TM-1 form' },
    { id: 6, case: 'A renewal application made in TM-12 form' },
    { id: 7, case: 'Duly filled form-18' },
    { id: 8, case: 'A government fees of appropriate amount' },
    {
      id: 9,
      case: 'Trade licence for individuals',
    },
    { id: 10, case: 'PAN card, coi, moa, aoa in case of company' },
    { id: 11, case: 'PAN card and deed in case of partnership' },
    { id: 12, case: 'Digital signature' },
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
                <Link href='#tmrenewal-filing' title='Trademark renewal' />
                <Link href='#tmrenewal-eligibility' title='Eligibility' />
                <Link href='#tmrenewal-docs' title='Document required' />
                <Link href='#tmrenewal-proceduer' title='Procedure' />
                <Link href='#tmrenewal-pricing' title='Pricing' />
                <Link href='#tmrenewal-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='tmrenewal-filing service' id='tmrenewal-filing'>
                <Typography>
                  <Title>Trademark Renewal</Title>
                  <Paragraph strong>
                    The registration of a trademark is valid only for a period
                    of 10 years. After which, it can be renewed from time to
                    time. Trademark renewal preserves those rights which are
                    only available to a registered mark. In case the proprietor
                    fails to renew the trademark, then he shall lose all the
                    protection that comes along with registration. For example,
                    a registered trademark has the benefit of the legal
                    presumption of ownership. That means that the burden of
                    proof is on others to try and disprove your ownership.
                  </Paragraph>
                </Typography>
              </div>
              {/* #trademark eligibility */}
              <div
                className='tmrenewal-eligibility service'
                id='tmrenewal-eligibility'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <Title>Trademark renewal eligibility</Title>
                    <Paragraph strong>
                      For renewal, you need to fill a form (TM-12).
                    </Paragraph>
                    <Paragraph strong>
                      Trademark lasts for 10 years and after the expiry of 10
                      years period it may lapse,if not renewed.
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
                    <img src={tdrenewalRequired} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* documents */}
              <div className='tmrenewal-docs service' id='tmrenewal-docs'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img
                      src={tdrenewalDocs}
                      alt='gstr-cases'
                      className='hide'
                    />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <DocumentComponent
                      title='Documents Required for Renewal Trademark'
                      documents={tmrenewalDocument}
                    />
                  </Col>
                </Row>
              </div>
              {/* benefits */}
              <div
                className='tmrenewal-proceduer service'
                id='tmrenewal-proceduer'>
                <Title>Trademark can be renewed in two ways</Title>
                <Paragraph strong>
                  Renew your trademark for changing any sign or word in the
                  existing mark
                </Paragraph>
                <Paragraph strong>
                  Renew your trademark without any change
                </Paragraph>
              </div>
              {/* Pricing info */}
              <div
                className='tmrenewal-pricing pricing service'
                id='tmrenewal-pricing'>
                <PricingComponent
                  dataOne={tmrenewBasic}
                  dataTwo={tmrenewStandard}
                  dataThree={tmrenewPremium}
                  basic='3,540'
                  standard='3,540'
                  premium='3,540'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='tmrenewal-faq'>
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

export default TmrenewalComponent;
