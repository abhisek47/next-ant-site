import { Row, Col, Typography, Button, Card, Statistic, List } from 'antd';
import { PercentageOutlined, TagsFilled } from '@ant-design/icons';
import rupeeIndian from '../assets/rupee-indian.svg';
import Link from 'next/link';

const SpeacialOffers = ({
  dataOne,
  dataTwo,
  dataThree,
  basic,
  standard,
  premium,
}) => {
  const { Title } = Typography;
  return (
    <div className='speacial-offer'>
      <div className='container' style={{ textAlign: 'left' }}>
        <Title data-aos='fade-up' data-aos-duration='600'>
          Speacial offers
        </Title>
        <Row gutter={16}>
          <Col className='ant-col-sm-24 ant-col-lg-8'>
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
                  value={basic}
                  prefix={
                    <img src={rupeeIndian} className='rupees' alt='basic' />
                  }
                  suffix={
                    <del>
                      <img src={rupeeIndian} className='rupees' alt='premium' />
                      11,800
                    </del>
                  }
                />
                <span className='inclusive'>
                  (20% discount on professional charges)
                </span>
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
          <Col className='ant-col-sm-24 ant-col-lg-8'>
            <Card className='price'>
              <div
                className='card-head'
                style={{
                  backgroundColor: '#f8ceec',
                  backgroundImage:
                    'linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)',
                }}>
                <Statistic
                  title='GST registration'
                  value={standard}
                  prefix={
                    <img src={rupeeIndian} className='rupees' alt='standard' />
                  }
                  suffix={
                    <del>
                      <img src={rupeeIndian} className='rupees' alt='premium' />
                      1,800
                    </del>
                  }
                />
                <span className='inclusive'>
                  (20% discount on professional charges)
                </span>
              </div>
              <div className='card-body'>
                <List
                  dataSource={dataTwo}
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
          <Col className='ant-col-sm-24 ant-col-lg-8'>
            <Card className='price'>
              <div
                className='card-head'
                style={{
                  backgroundColor: '#abe9cd',
                  backgroundImage:
                    'linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)',
                }}>
                <Statistic
                  title='ITR-1 return filing'
                  value={premium}
                  prefix={
                    <img src={rupeeIndian} className='rupees' alt='premium' />
                  }
                  suffix={
                    <del>
                      <img src={rupeeIndian} className='rupees' alt='premium' />
                      2,900
                    </del>
                  }
                />
                <span className='inclusive'>
                  (20% discount on professional charges)
                </span>
              </div>
              <div className='card-body'>
                <List
                  dataSource={dataThree}
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
