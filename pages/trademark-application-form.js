import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Select, Radio, Input } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';
import { loadFirebase } from '../lib/db';
import InputStateComponent from '../components/InputStateComponent';

class TrademarkUserForm extends Component {
  state = {
    businessName: '',
    businessAddress: '',
    businessType: '',
    businessEmail: '',
    city: '',
    state: '',
    ownerName: '',
    ownerNumber: '',
    ownerAdhaar: '',
    ownerPan: '',
    businessActivities: '',
    category: '',
    tradeLicence: '',
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
      category: e.target.value,
    });
  };

  uploadChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ tradeLicence: e.target.files[0] });
    }
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    let storage = firebase.storage();
    const {
      businessName,
      businessAddress,
      businessEmail,
      businessType,
      city,
      state,
      ownerName,
      ownerNumber,
      ownerAdhaar,
      ownerPan,
      businessActivities,
      category,
      tradeLicence,
    } = this.state;
    const uploadTask = storage
      .ref(`trademark/${tradeLicence.name}`)
      .put(tradeLicence);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('trademark')
          .child(tradeLicence.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    db.collection('trademark').add({
      businessName: businessName,
      businessAddress: businessAddress,
      businessEmail: businessEmail,
      businessType: businessType,
      city: city,
      state: state,
      ownerName: ownerName,
      ownerNumber: ownerNumber,
      ownerAdhaar: ownerAdhaar,
      ownerPan: ownerPan,
      businessActivities: businessActivities,
      category: category,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    window.location.href = 'https://rzp.io/l/trademark-filing';
    console.log('Received values of form: ', values);
    window.scrollTo(0, 0);
  };

  render() {
    const {
      businessName,
      businessAddress,
      businessEmail,
      businessType,
      city,
      state,
      ownerName,
      ownerNumber,
      ownerAdhaar,
      ownerPan,
      businessActivities,
      category,
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
          <title>Trademark Application Form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>
            Trademark Application Form
          </Title>
          <Paragraph strong>
            Fill in the below form to apply for trademark registration online.
            It will take less than 5 mins. Your details are secured by SSL.
          </Paragraph>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Title level={4}>Business Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business name */}
                  <Form.Item
                    name='businessName'
                    label='Business Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business name'
                      onChange={this.handleChange('businessName')}
                      value={businessName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business address */}
                  <Form.Item
                    name='businessAddress'
                    label='Business Address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your business name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business address'
                      onChange={this.handleChange('businessAddress')}
                      value={businessAddress}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business type */}
                  <Form.Item
                    name='businessType'
                    label='Type of Business'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business type!',
                      },
                    ]}>
                    <Select
                      placeholder='Your business registered as'
                      onChange={this.onTypeChange}
                      allowClear
                      size='large'
                      style={{ fontSize: 'inherit' }}>
                      <Option value='Private Limited Company'>
                        Private Limited Company
                      </Option>
                      <Option value='Public Limited Company'>
                        Public Limited Company
                      </Option>
                      <Option value='One Person Company'>
                        One Person Company
                      </Option>
                      <Option value='Proprietorship Firm'>
                        Proprietorship Firm
                      </Option>
                      <Option value='Partnership Firm'>Partnership Firm</Option>
                      <Option value='Limited Liability Partnership'>
                        Limited Liability Partnership
                      </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business email */}
                  <Form.Item
                    name='businessEmail'
                    label='Business Email'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business type!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='email'
                      placeholder='Enter yout business email address'
                      onChange={this.handleChange('businessEmail')}
                      value={businessEmail}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business city */}
                  <Form.Item
                    name='city'
                    label='City'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your business city!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business city'
                      onChange={this.handleChange('city')}
                      value={city}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* business state */}
                  <InputStateComponent onStateChange={this.onStateChange} />
                </Col>
              </Row>
              <Title level={4}>Owner Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner name */}
                  <Form.Item
                    name='ownerName'
                    label='Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout business name'
                      onChange={this.handleChange('ownerName')}
                      value={ownerName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner number */}
                  <Form.Item
                    name='ownerNumber'
                    label='Mobile Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your mobile number!',
                      },
                      {
                        pattern: /^[2-9]{2}\d{8}$/,
                        message: 'Please input 10 digit number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter your phone number'
                      onChange={this.handleChange('ownerNumber')}
                      value={ownerNumber}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner adhaar */}
                  <Form.Item
                    name='ownerAdhaar'
                    label='Adhaar Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your adhaar card number!',
                      },
                      {
                        pattern: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
                        message: 'Please input a valid Adhaar number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your adhaar card number'
                      onChange={this.handleChange('ownerAdhaar')}
                      value={ownerAdhaar}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* owner pan */}
                  <Form.Item
                    name='ownerPan'
                    label='PAN Number'
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
                      placeholder='Enter yout business PAN card number'
                      onChange={this.handleChange('ownerPan')}
                      value={ownerPan}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Title level={4}>Business Activities</Title>
              <Row gutter={24} align='top'>
                {/* business activities */}
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  <Form.Item
                    name='trademark'
                    label='What kind of business will be done under this brand ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please select required input!',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onActivityChange}
                          value={businessActivities}>
                          <Radio style={radioStyle} value={1}>
                            Selling Product
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onActivityChange}
                          value={businessActivities}>
                          <Radio style={radioStyle} value={2}>
                            Providing Services
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onActivityChange}
                          value={businessActivities}>
                          <Radio style={radioStyle} value={3}>
                            Both
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-24 ant-col-sm-24'>
                  {/* product category */}
                  <Form.Item
                    name='businessActivities'
                    label='Category of your Service'
                    extra='Choose the category of Service in which you want to register your trademark.'
                    rules={[
                      {
                        required: true,
                        message: 'Please select your category of services !',
                      },
                    ]}>
                    <Row gutter={24} align='top'>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onRadioChange}
                          value={category}>
                          <Radio style={radioStyle} value={1}>
                            Food and drink services
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            Treatment of materials
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            Building, Construction, Repair and Installation
                          </Radio>
                          <Radio style={radioStyle} value={4}>
                            Legal, personal, social, security services
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onRadioChange}
                          value={category}>
                          <Radio style={radioStyle} value={5}>
                            Scientific / technological services
                          </Radio>
                          <Radio style={radioStyle} value={6}>
                            Transport / Packaging / Storage
                          </Radio>
                          <Radio style={radioStyle} value={7}>
                            Insurance, financial, real estate affairs
                          </Radio>
                          <Radio style={radioStyle} value={8}>
                            Medical, Beauty care, Agriculture services
                          </Radio>
                        </Radio.Group>
                      </Col>
                      <Col className='ant-col-lg-8 ant-col-sm-24'>
                        <Radio.Group
                          onChange={this.onRadioChange}
                          value={category}>
                          <Radio style={radioStyle} value={9}>
                            Education, training, entertainment
                          </Radio>
                          <Radio style={radioStyle} value={10}>
                            Telecommunications
                          </Radio>
                          <Radio style={radioStyle} value={11}>
                            Advertising, Consulting, Office services
                          </Radio>
                        </Radio.Group>
                      </Col>
                    </Row>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* trade licence */}
                  <Form.Item
                    name='dragger'
                    label='Trade Licence for individuals'
                    extra='Attachment must be pdf or doc only'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your trade licence !',
                      },
                    ]}>
                    <input
                      type='file'
                      name='tradelicence'
                      onChange={this.uploadChange}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'></Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'></Col>
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

export default TrademarkUserForm;
