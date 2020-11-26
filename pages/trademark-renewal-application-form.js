import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Select } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';
import { loadFirebase } from '../lib/db';
import InputStateComponent from '../components/InputStateComponent';

class TmRenewUserForm extends Component {
  state = {
    name: '',
    address: '',
    pan: '',
    govtFees: '',
    city: '',
    state: '',
    idProof: '',
    regCertificate: '',
    tradeLicences: '',
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

  uploadIdProof = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ idProof: e.target.files[0] });
    }
  };

  uploadRegCertificate = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ regCertificate: e.target.files[0] });
    }
  };

  uploadTradeLicence = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ tradeLicences: e.target.files[0] });
    }
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    let storage = firebase.storage();
    const {
      name,
      address,
      pan,
      govtFees,
      city,
      state,
      tmNumber,
      tmClass,
      idProof,
      regCertificate,
      tradeLicences,
    } = this.state;
    const uploadIdProof = storage
      .ref(`trademark-renewal/${idProof.name}`)
      .put(idProof);
    uploadIdProof.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('trademark-renewal')
          .child(idProof.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const uploadRegCertificate = storage
      .ref(`trademark-renewal/${regCertificate.name}`)
      .put(regCertificate);
    uploadRegCertificate.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('trademark-renewal')
          .child(regCertificate.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const uploadTradeLicence = storage
      .ref(`trademark-renewal/${tradeLicences.name}`)
      .put(tradeLicences);
    uploadTradeLicence.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('trademark-renewal')
          .child(tradeLicences.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    db.collection('trademark-renewal').add({
      name: name,
      address: address,
      pan: pan,
      govtFees: govtFees,
      city: city,
      state: state,
      tmNumber: tmNumber,
      tmClass: tmClass,
      idProof: idProof,
      regCertificate: regCertificate,
      tradeLicence: tradeLicences,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Received values of form: ', values);
    window.location.href = 'https://rzp.io/l/trademark-renewal';
    window.scrollTo(0, 0);
  };

  render() {
    const {
      name,
      address,
      pan,
      govtFees,
      city,
      state,
      tmNumber,
      tmClass,
      idProof,
      regCertificate,
      tradeLicence,
    } = this.state;
    const { Option } = Select;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <Head>
          <title>Trademark Renewal Application Form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>
            Trademark Renewal Application Form
          </Title>
          <Paragraph strong>
            Fill in the below form to apply for trademark renewal online. It
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
                  {/*  name */}
                  <Form.Item
                    name='name'
                    label='Name of the registered owner of trademark'
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
                      onChange={this.handleChange('name')}
                      value={name}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* address */}
                  <Form.Item
                    name='address'
                    label='Address of the registered owner of trademark'
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
                      onChange={this.handleChange('address')}
                      value={address}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  city */}
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
                  {/*  state */}
                  <InputStateComponent onStateChange={this.onStateChange} />
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  pan */}
                  <Form.Item
                    name='pan'
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
                      placeholder='Enter your PAN number'
                      onChange={this.handleChange('pan')}
                      value={pan}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  govt fees */}
                  <Form.Item
                    name='govtFees'
                    label='A Government Fees of appropriate amount (Rs.)'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your government fees!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your government fees'
                      onChange={this.handleChange('govtFees')}
                      value={govtFees}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  trademark number */}
                  <Form.Item
                    name='tmNumber'
                    label='Trademark Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your trademark number!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your trademark number'
                      onChange={this.handleChange('tmNumber')}
                      value={tmNumber}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* trademark class */}
                  <Form.Item
                    name='tmClass'
                    label='Trademark Class'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your trademark class!',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your trademark class'
                      onChange={this.handleChange('tmClass')}
                      value={tmClass}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* id proof */}
                  <Form.Item
                    name='idproof'
                    valuePropName={idProof}
                    label='Identity proof of the Applicant'
                    extra='Attachment must be pdf or doc only'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your identity proof !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadIdProof} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* reg certificate */}
                  <Form.Item
                    name='regcertificate'
                    valuePropName={regCertificate}
                    label='Copy of the Registration Certificate'
                    extra='Attachment must be pdf or doc only'
                    rules={[
                      {
                        required: true,
                        message:
                          'Please attached your registration certificate !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadRegCertificate} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* trade licence */}
                  <Form.Item
                    name='tradelicence'
                    valuePropName={tradeLicence}
                    label='Trade Licence for individuals'
                    extra='Attachment must be pdf or doc only'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your trade licence !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadTradeLicence} />
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

export default TmRenewUserForm;
