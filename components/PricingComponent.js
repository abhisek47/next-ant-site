import { Row, Col, Typography, Button, Card, Statistic, List } from 'antd';
import { TagsFilled } from '@ant-design/icons';
import rupeeIndian from '../assets/rupee-indian.svg';

const PricingComponent = ({
  dataOne,
  dataTwo,
  dataThree,
  basic,
  standard,
  premium,
  basicDiscount,
  standardDiscount,
  premiumDiscount,
}) => {
  const { Title } = Typography;
  return (
    <>
      <Title className='gst-caption'>Choose your plan</Title>
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
                title='Basic'
                value={basic}
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
              <Button
                icon={<TagsFilled />}
                type='primary'
                size='large'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Buy now
              </Button>
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
                title='Standard'
                value={standard}
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
              <Button
                icon={<TagsFilled />}
                type='primary'
                size='large'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Buy now
              </Button>
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
                title='Premium'
                value={premium}
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
              <Button
                icon={<TagsFilled />}
                type='primary'
                size='large'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Buy now
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PricingComponent;
