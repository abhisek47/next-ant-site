import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Select, Radio, Input } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { loadFirebase } from '../lib/db';
import Head from 'next/head';
import InputStateComponent from '../components/InputStateComponent';

class PublicUserForm extends Component {
  state = {
    companyName: '',
    companyAddress: '',
    city: '',
    state: '',
    directorName: '',
    directorAdd: '',
    directorNum: '',
    directorPan: '',
    directorPhotocopy: '',
    directorIdproof: '',
    utilityBill: '',
    directorDsc: '',
    directorInfo: '',
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    let storage = firebase.storage();
    const {
      companyName,
      companyAddress,
      city,
      state,
      directorName,
      directorAdd,
      directorNum,
      directorPan,
      directorPhotocopy,
      directorIdproof,
      utilityBill,
      directorDsc,
      directorInfo,
    } = this.state;
    db.collection('public-company').add({
      companyName: companyName,
      companyAddress: companyAddress,
      city: city,
      state: state,
      directorName: directorName,
      directorAdd: directorAdd,
      directorNum: directorNum,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    const upldDirectorPan = storage
      .ref(`public-company/${directorPan.name}`)
      .put(directorPan);
    upldDirectorPan.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('public-company')
          .child(directorPan.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldDirectorPhotocopy = storage
      .ref(`public-company/${directorPhotocopy.name}`)
      .put(directorPhotocopy);
    upldDirectorPhotocopy.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('public-company')
          .child(directorPhotocopy.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldDirectorIdproof = storage
      .ref(`public-company/${directorIdproof.name}`)
      .put(directorIdproof);
    upldDirectorIdproof.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('public-company')
          .child(directorIdproof.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldUtilityBill = storage
      .ref(`public-company/${utilityBill.name}`)
      .put(utilityBill);
    upldUtilityBill.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('public-company')
          .child(utilityBill.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldDirectorDsc = storage
      .ref(`public-company/${directorDsc.name}`)
      .put(directorDsc);
    upldDirectorDsc.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('public-company')
          .child(directorDsc.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldDirectorInfo = storage
      .ref(`public-company/${directorInfo.name}`)
      .put(directorInfo);
    upldDirectorInfo.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('public-company')
          .child(directorInfo.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    window.location.href = 'https://rzp.io/l/public-company-filing';
    console.log('Received values of form: ', values);
    window.scrollTo(0, 0);
  };

  //   handle field change
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  onStateChange = (value) => {
    console.log(value);
    this.setState({
      state: value,
    });
  };

  uploadDirectorPan = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ directorPan: e.target.files[0] });
    }
  };

  uploadDirectorPhotocopy = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ directorPhotocopy: e.target.files[0] });
    }
  };

  uploadDirectorIdproof = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ directorIdproof: e.target.files[0] });
    }
  };

  uploadUtilityBill = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ utilityBill: e.target.files[0] });
    }
  };

  uploadDirectorDsc = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ directorDsc: e.target.files[0] });
    }
  };

  uploadDirectorInfo = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ directorInfo: e.target.files[0] });
    }
  };

  render() {
    const {
      companyName,
      companyAddress,
      city,
      state,
      directorName,
      directorAdd,
      directorNum,
      directorPan,
      directorPhotocopy,
      directorIdproof,
      utilityBill,
      directorDsc,
      directorInfo,
    } = this.state;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <Head>
          <title>Public company application form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>
            Public company application form
          </Title>
          <Paragraph strong>
            Fill in the below form to apply for public company registration
            online. It will take less than 5 mins.
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
                  {/* company name */}
                  <Form.Item
                    name='companyName'
                    label='Company name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your company name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your company name'
                      onChange={this.handleChange('companyName')}
                      value={companyName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* company address */}
                  <Form.Item
                    name='companyAddress'
                    label='Company address'
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
              <Title level={4}>Director Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director name */}
                  <Form.Item
                    name='directorName'
                    label='Name of director'
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
                      onChange={this.handleChange('directorName')}
                      value={directorName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director address */}
                  <Form.Item
                    name='directorAdd'
                    label='Address of director'
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
                      onChange={this.handleChange('directorAdd')}
                      value={directorAdd}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director number */}
                  <Form.Item
                    name='directorNum'
                    label='Number of director'
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
                      onChange={this.handleChange('directorNum')}
                      value={directorNum}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* director PAN */}
                  <Form.Item
                    name='directorPan'
                    valuePropName={directorPan}
                    label='PAN no of director'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your PAN card document !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadDirectorPan} />
                  </Form.Item>
                </Col>
              </Row>
              {/* add directors */}
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
                              {/* director name */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'directorName']}
                                fieldKey={[field.fieldKey, 'directorName']}
                                label='Name of director'
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
                                  onChange={this.handleChange('directorName')}
                                  value={directorName}
                                />
                              </Form.Item>
                            </Col>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* director address */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'directorAdd']}
                                fieldKey={[field.fieldKey, 'directorAdd']}
                                label='Address of director'
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
                                  onChange={this.handleChange('directorAdd')}
                                  value={directorAdd}
                                />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={24} align='top'>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* director number */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'directorNum']}
                                fieldKey={[field.fieldKey, 'directorNum']}
                                label='Number of director'
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
                                  onChange={this.handleChange('directorNum')}
                                  value={directorNum}
                                />
                              </Form.Item>
                            </Col>
                            <Col className='ant-col-lg-12 ant-col-sm-24'>
                              {/* director PAN */}
                              <Form.Item
                                {...field}
                                name={[field.name, 'directorPan']}
                                fieldKey={[field.fieldKey, 'directorPan']}
                                label='PAN no of director'
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
                                  onChange={this.handleChange('directorPan')}
                                  value={directorPan}
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
                          <PlusOutlined /> Add directors
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
              {/* attachment */}
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* photocopy */}
                  <Form.Item
                    name='directorPhotocopy'
                    valuePropName={directorPhotocopy}
                    label='Photograph of all the directors'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your photocopy !',
                      },
                    ]}>
                    <input
                      type='file'
                      onChange={this.uploadDirectorPhotocopy}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* id proof */}
                  <Form.Item
                    name='directorIdproof'
                    valuePropName={directorIdproof}
                    label='ID proof of all the directors ( driving license / passport / voter ID)'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your id proof !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadDirectorIdproof} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* utility bill */}
                  <Form.Item
                    name='utilityBill'
                    valuePropName={utilityBill}
                    label='Electricity bill or any other utility bill for the address proof of the registered office.'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached required file !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadUtilityBill} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* photocopy */}
                  <Form.Item
                    name='directorDsc'
                    valuePropName={directorDsc}
                    label='DSC of all directors'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached DSC of all directors !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadDirectorDsc} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* id proof */}
                  <Form.Item
                    name='directorInfo'
                    valuePropName={directorInfo}
                    label='Mobile bill / electricity bill / bank passbook of all director'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your id proof !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadDirectorInfo} />
                  </Form.Item>
                </Col>
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

export default PublicUserForm;
