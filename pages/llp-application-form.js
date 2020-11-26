import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Select, Radio, Input } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { loadFirebase } from '../lib/db';
import Head from 'next/head';
import InputStateComponent from '../components/InputStateComponent';

class LlpUserForm extends Component {
  state = {
    prefNameOne: '',
    prefNameTwo: '',
    prefNameThree: '',
    companyAddress: '',
    city: '',
    state: '',
    partnerName: '',
    partnerAdd: '',
    partnerNum: '',
    partnerPan: '',
    businessActivities: '',
    value: '',
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    const {
      prefNameOne,
      prefNameTwo,
      prefNameThree,
      companyAddress,
      city,
      state,
      partnerName,
      partnerAdd,
      partnerNum,
      partnerPan,
      businessActivities,
      value,
    } = this.state;
    db.collection('limited-liability-partnership').add({
      prefNameOne: prefNameOne,
      prefNameTwo: prefNameTwo,
      prefNameThree: prefNameThree,
      companyAddress: companyAddress,
      city: city,
      state: state,
      partnerName: partnerName,
      partnerAdd: partnerAdd,
      partnerNum: partnerNum,
      partnerPan: partnerPan,
      value: value,
      businessActivities: businessActivities,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    window.location.href = 'https://rzp.io/l/llp-filing';
    console.log('Received values of form: ', values);
    window.scrollTo(0, 0);
  };

  //   handle field change
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  onTypeChange = (value) => {
    console.log(value);
    this.setState({
      businessType: value,
    });
  };

  onStateChange = (value) => {
    console.log(value);
    this.setState({
      state: value,
    });
  };

  onActivityChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      businessActivities: e.target.value,
    });
  };

  onRadioChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    this.setState({
      addressProf: 'hello there ' + e,
    });

    return e && e.fileList;
  };

  render() {
    const {
      prefNameOne,
      prefNameTwo,
      prefNameThree,
      companyAddress,
      city,
      state,
      partnerName,
      partnerAdd,
      partnerNum,
      partnerPan,
      businessActivities,
      value,
    } = this.state;
    const { Option } = Select;
    const { Title, Paragraph } = Typography;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <>
        <Head>
          <title>LLP application form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>LLP Application Form</Title>
          <Paragraph strong>
            Fill in the below form to apply for LLP registration online. It will
            take less than 5 mins.
          </Paragraph>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Title level={4}>Company Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* pref name 1 */}
                  <Form.Item
                    name='prefNameOne'
                    label='LLP Preference Name 1'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your preference name!',
                      },
                    ]}
                    extra='Mention the intended name under which you want to start your LLP '>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your preference name'
                      onChange={this.handleChange('prefNameOne')}
                      value={prefNameOne}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* pref name 2 */}
                  <Form.Item
                    name='prefNameTwo'
                    label='LLP Preference Name 2'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your preference name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your preference name'
                      onChange={this.handleChange('prefNameTwo')}
                      value={prefNameTwo}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* pref name 3 */}
                  <Form.Item
                    name='prefNameThree'
                    label='LLP Preference Name 3'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your preference name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your preference name'
                      onChange={this.handleChange('prefNameThree')}
                      value={prefNameThree}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* company address */}
                  <Form.Item
                    name='companyAddress'
                    label='Company Address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your company address!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout company address'
                      onChange={this.handleChange('companyAddress')}
                      value={companyAddress}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* company city */}
                  <Form.Item
                    name='city'
                    label='City'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your city!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your city'
                      onChange={this.handleChange('city')}
                      value={city}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* company state */}
                  <InputStateComponent onStateChange={this.onStateChange} />
                </Col>
              </Row>
              <Title level={4}>Partner Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner name */}
                  <Form.Item
                    name='partnerName'
                    label='Name of Partner'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your name'
                      onChange={this.handleChange('partnerName')}
                      value={partnerName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner address */}
                  <Form.Item
                    name='partnerAdd'
                    label='Address of Partner'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your address!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your address'
                      onChange={this.handleChange('partnerAdd')}
                      value={partnerAdd}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner number */}
                  <Form.Item
                    name='partnerNum'
                    label='Number of Partner'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your  number!',
                      },
                      {
                        pattern: /^[2-9]{2}\d{8}$/,
                        message: 'Please input 10 digit number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter your number'
                      onChange={this.handleChange('partnerNum')}
                      value={partnerNum}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* partner PAN */}
                  <Form.Item
                    name='partnerOnePan'
                    label='PAN no of Partner'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your PAN number!',
                      },
                      {
                        pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                        message: 'Please input a valid PAN number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your PAN number'
                      onChange={this.handleChange('partnerPan')}
                      value={partnerPan}
                    />
                  </Form.Item>
                </Col>
              </Row>
              {/* add partners */}
              <Form.List name='users'>
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        //-------------------------------------
                        <React.Fragment key={field.key}>
                          <hr />
                          <Row gutter={24} align='top'>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner name */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerName']}
                                fieldKey={[field.fieldKey, 'partnerName']}
                                label='Name of Partner'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your name!',
                                  },
                                ]}>
                                <Input
                                  style={{ padding: '8px' }}
                                  type='text'
                                  placeholder='Enter your name'
                                  onChange={this.handleChange('partnerName')}
                                  value={partnerName}
                                />
                              </Form.Item>
                            </Col>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner address */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerAdd']}
                                fieldKey={[field.fieldKey, 'partnerAdd']}
                                label='Address of Partner'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please enter your address!',
                                  },
                                ]}>
                                <Input
                                  style={{ padding: '8px' }}
                                  type='text'
                                  placeholder='Enter your address'
                                  onChange={this.handleChange('partnerAdd')}
                                  value={partnerAdd}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={24} align='top'>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner number */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerNum']}
                                fieldKey={[field.fieldKey, 'partnerNum']}
                                label='Number of Partner'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your  number!',
                                  },
                                ]}>
                                <Input
                                  style={{ padding: '8px' }}
                                  type='number'
                                  placeholder='Enter your number'
                                  onChange={this.handleChange('partnerNum')}
                                  value={partnerNum}
                                />
                              </Form.Item>
                            </Col>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* partner PAN */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'partnerPan']}
                                fieldKey={[field.fieldKey, 'partnerPan']}
                                label='PAN no of Partner'
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your PAN number!',
                                  },
                                ]}>
                                <Input
                                  style={{ padding: '8px' }}
                                  type='text'
                                  placeholder='Enter your PAN number'
                                  onChange={this.handleChange('partnerPan')}
                                  value={partnerPan}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <MinusCircleOutlined
                            onClick={() => {
                              remove(field.name);
                            }}
                            className='remove'
                          />
                        </React.Fragment>
                      ))}
                      <Form.Item>
                        <Button
                          type='dashed'
                          onClick={() => {
                            add();
                          }}>
                          <PlusOutlined /> Add Partners
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
              <Title level={4}>Business Activities</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  {/* business activities */}
                  <Form.Item
                    name='businessActivities'
                    label='What would be the main business under this LLP ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please select your business activities!',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onActivityChange}
                          value={businessActivities}>
                          <Radio style={radioStyle} value={1}>
                            Accommodations
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            Consulting
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            Manufacturing
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onActivityChange}
                          value={businessActivities}>
                          <Radio style={radioStyle} value={4}>
                            Trading
                          </Radio>
                          <Radio style={radioStyle} value={5}>
                            Finance
                          </Radio>
                          <Radio style={radioStyle} value={6}>
                            Real Estate
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onActivityChange}
                          value={businessActivities}>
                          <Radio style={radioStyle} value={7}>
                            Retail
                          </Radio>
                          <Radio style={radioStyle} value={8}>
                            Construction
                          </Radio>
                          <Radio style={radioStyle} value={9}>
                            Other
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  <Form.Item
                    name='trademark'
                    label='Do you own a Trademark for the logo or the name of your LLP ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please select required input!',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onRadioChange}
                          value={value}>
                          <Radio style={radioStyle} value={1}>
                            Yes
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onRadioChange}
                          value={value}>
                          <Radio style={radioStyle} value={2}>
                            No
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onRadioChange}
                          value={value}>
                          <Radio style={radioStyle} value={3}>
                            On Process
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              {/* submit button */}
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                  size='large'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default LlpUserForm;
