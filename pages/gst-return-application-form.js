import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { Form, Input, Typography, Button, Row, Col, Select } from 'antd';
import Head from 'next/head';
import { loadFirebase } from '../lib/db';
import InputStateComponent from '../components/InputStateComponent';

class GstReturnUserForm extends Component {
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
    addressProf: '',
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

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
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
      addressProf,
    } = this.state;
    db.collection('gst-return').add({
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
      value: value,
      businessActivities: businessActivities,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    window.location.href = 'https://rzp.io/l/gst-return-filing';
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
      addressProf,
    } = this.state;
    const { Option } = Select;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <Head>
          <title>GST Return Application Form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>
            GST Return Application Form
          </Title>
          <Paragraph strong>
            Fill in the below form to apply for GST return filing online. It
            will take less than 5 mins. Your details are secured by SSL.
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

export default GstReturnUserForm;
