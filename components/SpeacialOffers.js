import { Row, Col, Typography, Button, Card, Statistic, List } from 'antd';
import { PercentageOutlined, TagsFilled } from '@ant-design/icons';
import rupeeIndian from '../assets/rupee-indian.svg';
import Link from 'next/link';

const SpeacialOffers = ({
  dataOne,
  dataTwo,
  dataThree,
  dataFour,
  company,
  trademark,
  gst,
  incomeTax,
}) => {
  const { Title } = Typography;
  return (
    <div className='speacial-offer'>
      <div className='container' style={{ textAlign: 'left' }}>
        <Title data-aos='fade-up' data-aos-duration='600'>
          Our best plans
        </Title>
        <Row gutter={16}>
          <Col className='ant-col-sm-24 ant-col-md-12 ant-col-lg-6'>
            <Card className='price'>
              <div
                className='card-head'
                style={{
                  backgroundColor: '#d5adc8',
                  backgroundImage:
                    ' linear-gradient(315deg, #d5adc8 0%, #ff8489 74%)',
                }}>
                <Statistic
                  title='Private company registration'
                  value={company}
                  prefix={
                    <img src={rupeeIndian} className='rupees' alt='basic' />
                  }
                />
                <span className='inclusive'>All inclusive</span>
              </div>
              <div className='card-body'>
                <List
                  dataSource={dataOne}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Link href='/private-company'>
                  <Button icon={<TagsFilled />} type='primary' size='large'>
                    Buy now
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className='ant-col-sm-24 ant-col-md-12 ant-col-lg-6'>
            <Card className='price'>
              <div
                className='card-head'
                style={{
                  backgroundColor: '#f8ceec',
                  backgroundImage:
                    'linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)',
                }}>
                <Statistic
                  title='Trademark registration'
                  value={trademark}
                  prefix={
                    <img src={rupeeIndian} className='rupees' alt='standard' />
                  }
                />
                <span className='inclusive'>All inclusive</span>
              </div>
              <div className='card-body'>
                <List
                  dataSource={dataTwo}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Link href='/trademark'>
                  <Button icon={<TagsFilled />} type='primary' size='large'>
                    Buy now
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className='ant-col-sm-24 ant-col-md-12 ant-col-lg-6'>
            <Card className='price'>
              <div
                className='card-head'
                style={{
                  backgroundColor: '#abe9cd',
                  backgroundImage:
                    'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)',
                }}>
                <Statistic
                  title='GST registration'
                  value={gst}
                  prefix={
                    <img src={rupeeIndian} className='rupees' alt='premium' />
                  }
                />
                <span className='inclusive'>All inclusive</span>
              </div>
              <div className='card-body'>
                <List
                  dataSource={dataThree}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Link href='/gst'>
                  <Button icon={<TagsFilled />} type='primary' size='large'>
                    Buy now
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col className='ant-col-sm-24 ant-col-md-12 ant-col-lg-6'>
            <Card className='price'>
              <div
                className='card-head'
                style={{
                  backgroundColor: '#abe9cd',
                  backgroundImage:
                    'linear-gradient( 100.5deg,  rgba(148,146,236,1) 17.7%, rgba(245,194,194,1) 76.1% )',
                }}>
                <Statistic
                  title='ITR-1 return filing'
                  value={incomeTax}
                  prefix={
                    <img src={rupeeIndian} className='rupees' alt='premium' />
                  }
                />
                <span className='inclusive'>All inclusive</span>
              </div>
              <div className='card-body'>
                <List
                  dataSource={dataFour}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
                <Link href='/income-tax-return-1'>
                  <Button icon={<TagsFilled />} type='primary' size='large'>
                    Buy now
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SpeacialOffers;
