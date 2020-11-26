import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Select, Radio, Input } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import { loadFirebase } from '../lib/db';
import Head from 'next/head';
import InputStateComponent from '../components/InputStateComponent';

class IsoUserForm extends Component {
  state = {
    estName: '',
    estAddress: '',
    city: '',
    state: '',
    estPan: '',
    estAdhaar: '',
    estPhotocopy: '',
    salesBill: '',
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    let storage = firebase.storage();
    const {
      estName,
      estAddress,
      city,
      state,
      estPan,
      estAdhaar,
      estPhotocopy,
      salesBill,
    } = this.state;
    db.collection('import-export-code').add({
      estName: estName,
      estAddress: estAddress,
      city: city,
      state: state,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    const upldApplicantPan = storage
      .ref(`import-export-code/${applicantPan.name}`)
      .put(applicantPan);
    upldApplicantPan.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('import-export-code')
          .child(applicantPan.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldApplicantAdhaar = storage
      .ref(`import-export-code/${applicantAdhaar.name}`)
      .put(applicantAdhaar);
    upldApplicantAdhaar.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('import-export-code')
          .child(applicantAdhaar.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldApplicantAddProof = storage
      .ref(`import-export-code/${applicantAddProof.name}`)
      .put(applicantAddProof);
    upldApplicantAddProof.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('import-export-code')
          .child(applicantAddProof.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldApplicantNoc = storage
      .ref(`import-export-code/${applicantNoc.name}`)
      .put(applicantNoc);
    upldApplicantNoc.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('import-export-code')
          .child(applicantNoc.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldCancelCheque = storage
      .ref(`import-export-code/${cancelCheque.name}`)
      .put(cancelCheque);
    upldCancelCheque.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('import-export-code')
          .child(cancelCheque.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldApplicantDsc = storage
      .ref(`import-export-code/${applicantDsc.name}`)
      .put(applicantDsc);
    upldApplicantDsc.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('import-export-code')
          .child(applicantDsc.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    window.location.href = 'https://rzp.io/l/import-export-filing';
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

  uploadEstPan = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ estPan: e.target.files[0] });
    }
  };

  uploadEstAdhaar = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ estAdhaar: e.target.files[0] });
    }
  };

  uploadEstPhotocopy = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ estPhotocopy: e.target.files[0] });
    }
  };

  uploadSalesBill = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ salesBill: e.target.files[0] });
    }
  };

  render() {
    const {
      estName,
      estAddress,
      city,
      state,
      estPan,
      estAdhaar,
      estPhotocopy,
      salesBill,
    } = this.state;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <Head>
          <title>ISO application form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>ISO application form</Title>
          <Paragraph strong>
            Fill in the below form to apply for ISO registration online. It will
            take less than 5 mins.
          </Paragraph>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Title level={4}>Establishment Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* est name */}
                  <Form.Item
                    name='estName'
                    label='Name of establishment'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your name'
                      onChange={this.handleChange('estName')}
                      value={estName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* est address */}
                  <Form.Item
                    name='estAddress'
                    label='Establishment address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your address!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your address'
                      onChange={this.handleChange('estAddress')}
                      value={estAddress}
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
                  {/*  state */}
                  <InputStateComponent onStateChange={this.onStateChange} />
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* est PAN */}
                  <Form.Item
                    name='applicantPan'
                    valuePropName={estPan}
                    label='Copy of PAN card'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your PAN card document !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEstPan} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* est adhaar card */}
                  <Form.Item
                    name='applicantAdhaar'
                    valuePropName={estAdhaar}
                    label='Aadhaar card / voter identity card'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your documents !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEstAdhaar} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* est photocopy */}
                  <Form.Item
                    name='estPhotocopy'
                    valuePropName={estPhotocopy}
                    label='Passport size photograph of establishment'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your photograph !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEstPhotocopy} />
                  </Form.Item>
                </Col>
              </Row>
              {/* attachment */}
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* sales bill */}
                  <Form.Item
                    name='salesBill'
                    valuePropName={salesBill}
                    label='Two copies of sales bill / purchase bill.'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your sales / purchase bill !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadSalesBill} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'></Col>
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

export default IsoUserForm;
