import {
  Layout,
  Row,
  Col,
  Typography,
  List,
  Collapse,
  Anchor,
  Card,
} from 'antd';
import PricingComponent from './PricingComponent';
import tdRequired from '../assets/td-required.svg';
import tdDocs from '../assets/td-docs.svg';
import {
  CaretRightOutlined,
  CheckCircleFilled,
  EditFilled,
} from '@ant-design/icons';
import DocumentComponent from './DocumentComponent';
// import TableComponent from './TableComponent';
import {
  trademarkBasic,
  trademarkStandard,
  trademarkPremium,
} from './PricingDetails';

const TrademarkComponent = () => {
  const tab1 = [
    {
      id: 1,
      title: 'How to select a good trademark ?',
      details:
        'If it is a word it should be easy to speak, spell and remember. The best trademarks are invented words or coined words or unique geometrical designs. Please avoid selection of a geographical name, common personal name or surname.No one can have monopoly right on it. Avoid adopting laudatory word or words that describe the quality of goods(such as best, perfect, super etc). It is advisable to conduct a market survey to ascertain if same / similar mark is used in market.',
    },
    {
      id: 2,
      title: 'What are the benefits of registering a trademark ?',
      details:
        'The registration of a trademark confers upon the owner the exclusive right to the use the trademark in relation to the goods or services in respect of which the mark is registered and to indicate so by using the symbol (R), and seek the relief of infringement in appropriate courts in the country. The exclusive right is however subject to any conditions entered on the register such as limitation of area of use etc. Also, where two or more persons have registered identical or nearly similar marks due to special circumstances, such exclusive right does not operate against each other.',
    },
    {
      id: 3,
      title: 'What does the Register of trademark contain ?',
      details:
        'The register of trademark currently maintained in electronic form contains inter alia the trademark the class and goods/ services in respect of which it is registered including particulars affecting the scope of registration of rights conferred; the address of the proprietors; particulars of trade or other description of the proprietor; the convention application date (if applicable); where a trademark has been registered with the consent of proprietor of an earlier mark or earlier rights, that fact.',
    },
    {
      id: 4,
      title: 'Can any correction be made in the application or register ?',
      details:
        'But the basic principle is that the trademark applied for should not be substantially altered affecting its identity. Subject to this changes are permissible according to rules detailed in the subordinate legislation.',
    },
    {
      id: 5,
      title: 'Can a registered trademark be removed from the register ?',
      details:
        'It can be removed on application to the Registrar on prescribed form on the ground that the mark is wrongly remaining on the register. The Registrar also can suo moto issue Notice for removal of a registered trademark?',
    },
  ];
  const eligibility = [
    'Any name (including personal or surname of the applicant or predecessor in business or the signature of the person), which is not unusual for trade to adopt as a mark.',
    'An invented word or any arbitrary dictionary word or words, not being directly descriptive of the character or quality of the goods/ service.',
    'The right to proprietorship of a trademark may be acquired by either registration under the Act or by use in relation to particular goods or service.',
    'Devices, including fancy devices or symbols',
    'Monograms',
    'Combination of colors or even a single color in combination with a word or device',
    'Shape of goods or their packaging',
    'Marks constituting a 3 - dimensional sign.',
    'Sound marks when represented in conventional notation or described in words by being graphically represented.',
  ];
  const trademarkDocument = [
    { id: 1, case: 'PAN card' },
    { id: 2, case: 'Adhaar card' },
    {
      id: 3,
      case: 'Trade licence',
    },
    {
      id: 4,
      case:
        'PAN card, certificate of insurance , memorandum of association , articles of association in case of company',
    },
    { id: 5, case: 'PAN card and deed in case of partnership' },
    { id: 6, case: 'Digital signature' },
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
                <Link href='#trademark-filing' title='Trademark registration' />
                <Link href='#trademark-eligibility' title='Eligibility' />
                <Link href='#trademark-docs' title='Document required' />
                <Link href='#trademark-benefit' title='Benefits' />
                <Link href='#trademark-pricing' title='Pricing' />
                <Link href='#trademark-faq' title='FAQ' />
              </Anchor>
            </Col>
            <Col className='ant-col-md-16 ant-col-lg-18'>
              {/* registration info */}
              <div className='trademark-filing service' id='trademark-filing'>
                <Typography>
                  <Title>Trademark registration</Title>
                  <Paragraph strong>
                    A trademark  is a type of intellectual property consisting
                    of recognizable sign, design,or expression which
                    identifies products or services of a particular source from
                    those of others, although trademarks used to identify
                    services are usually called service marks. The trademark
                    owner can be an individual, business organization, or
                    any legal entity. A trademark may be located on a package,
                    a label, a voucher, or on the product itself. For the sake
                    of corporate identity, trademarks are often displayed on
                    company buildings. It is legally recognized as a type
                    of intellectual property.
                  </Paragraph>
                </Typography>
              </div>
              {/* #trademark eligibility */}
              <div
                className='trademark-eligibility service'
                id='trademark-eligibility'>
                <Title>What can be registered ?</Title>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
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
                    <img src={tdRequired} alt='gstr-cases' />
                  </Col>
                </Row>
              </div>
              {/* documents */}
              <div className='trademark-docs service' id='trademark-docs'>
                <Row gutter={14} align='middle'>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <img src={tdDocs} alt='gstr-cases' />
                  </Col>
                  <Col className='ant-col-lg-12 ant-col-sm-24'>
                    <DocumentComponent
                      title='Documents Required for Registration'
                      documents={trademarkDocument}
                    />
                  </Col>
                </Row>
              </div>
              {/* benefits */}
              <div className='trademark-benefit service' id='trademark-benefit'>
                <Title>What are the benefits of trademark registration ?</Title>
                <Paragraph strong>
                  The registration of a trademark confers upon the owner the
                  exclusive right to the use the trademark in relation to the
                  goods or services in respect of which the mark is registered
                  and to indicate so by using the symbol (R), and seek the
                  relief of infringement in appropriate courts in the country.
                  The exclusive right is however subject to any conditions
                  entered on the register such as limitation of area of use etc.
                  Also, where two or more persons have registered identical or
                  nearly similar marks due to special circumstances, such
                  exclusive right does not operate against each other.
                </Paragraph>
                <Paragraph strong>
                  Softcopy of trademark to be registered along with list of
                  goods and services For which registration is needed.
                </Paragraph>
                <Row gutter={16}>
                  <Col className='ant-col-sm-24'>
                    <Card className='box'>
                      <Paragraph>
                        USE : Date of first use of the trademark in India, if at
                        all used or else the application can be filed on a
                        proposed to be used In case the use of the trademark is
                        claimed prior to the date of the application, an
                        affidavit testifying to such use along with supporting
                        documents required for trademark registration, shall
                        have be filed along with the application. [The term
                        ‘use’ in India has an extensive meaning and does not
                        necessarily mean physical presence of the goods or
                        services in India. Advertisement of the mark in foreign
                        journals having circulation in India or the use of the
                        mark in sales invoices, letterheads etc. bearing the
                        trademark shall constitute ‘use’ of the mark in India.].
                      </Paragraph>
                    </Card>
                  </Col>
                  <Col className='ant-col-sm-24'>
                    <Card className='box'>
                      <Paragraph>
                        A certified priority document or its duly notarized copy
                        is to be submitted with the Trade Marks Office in
                        original within two months of the filing of the
                        application. If the certificate is not in English, a
                        notarized English translation is required.
                      </Paragraph>
                    </Card>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col className='ant-col-sm-24'>
                    <Card className='box'>
                      <Paragraph>
                        Power of Attorney : A prescribed document simply signed
                        by the authorized signatory of the Applicant with the
                        name and designation clearly mentioned (no legalization/
                        notarization is required).
                      </Paragraph>
                    </Card>
                  </Col>
                  <Col className='ant-col-sm-24'>
                    <Card className='box'>
                      <Paragraph>
                        A partnership firm, body corporates can give a
                        certificate of registration under MSME or Start-up India
                        scheme to get a 50% rebate on the Government fee
                      </Paragraph>
                    </Card>
                  </Col>
                </Row>
              </div>
              {/* Pricing info */}
              <div className='pricing service' id='trademark-pricing'>
                <PricingComponent
                  dataOne={trademarkBasic}
                  dataTwo={trademarkStandard}
                  dataThree={trademarkPremium}
                  basic='6,490'
                  standard='6,490'
                  premium='12,000'
                />
              </div>
              {/* faq */}
              <div className='faq service' id='trademark-faq'>
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

export default TrademarkComponent;
