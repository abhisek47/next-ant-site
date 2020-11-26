import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Input } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import { loadFirebase } from '../lib/db';
import Head from 'next/head';
import InputStateComponent from '../components/InputStateComponent';

class PfUserForm extends Component {
  state = {
    estName: '',
    estAddress: '',
    city: '',
    state: '',
    estNum: '',
    estPan: '',
    estIncorporation: '',
    cancelCheque: '',
    estAddproof: '',
    directorSignature: '',
    empConsent: '',
    applicantSignature: '',
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
      estNum,
      estPan,
      estIncorporation,
      cancelCheque,
      estAddproof,
      directorSignature,
      empConsent,
      applicantSignature,
    } = this.state;
    db.collection('provident-fund').add({
      estName: estName,
      estAddress: estAddress,
      city: city,
      state: state,
      estNum: estName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    const upldEstPan = storage.ref(`provident-fund/${estPan.name}`).put(estPan);
    upldEstPan.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('provident-fund')
          .child(estPan.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldEstIncorporation = storage
      .ref(`provident-fund/${estIncorporation.name}`)
      .put(estIncorporation);
    upldEstIncorporation.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('provident-fund')
          .child(estIncorporation.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldCancelCheque = storage
      .ref(`provident-fund/${cancelCheque.name}`)
      .put(cancelCheque);
    upldCancelCheque.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('provident-fund')
          .child(cancelCheque.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldEstAddProof = storage
      .ref(`provident-fund/${estAddproof.name}`)
      .put(estAddproof);
    upldEstAddProof.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('provident-fund')
          .child(estAddproof.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldDirectorSignature = storage
      .ref(`provident-fund/${directorSignature.name}`)
      .put(directorSignature);
    upldDirectorSignature.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('provident-fund')
          .child(directorSignature.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldEmpConsent = storage
      .ref(`provident-fund/${empConsent.name}`)
      .put(empConsent);
    upldEmpConsent.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('provident-fund')
          .child(empConsent.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldApplicantSignature = storage
      .ref(`provident-fund/${applicantSignature.name}`)
      .put(applicantSignature);
    upldApplicantSignature.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('provident-fund')
          .child(applicantSignature.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    window.location.href = 'https://rzp.io/l/provident-fund-filing';
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

  uploadEstIncorporation = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ estIncorporation: e.target.files[0] });
    }
  };

  uploadCancelCheque = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ cancelCheque: e.target.files[0] });
    }
  };

  uploadEstAddProof = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ estAddproof: e.target.files[0] });
    }
  };

  uploadEmpConsent = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ empConsent: e.target.files[0] });
    }
  };

  uploadApplicantSignature = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ applicantSignature: e.target.files[0] });
    }
  };

  render() {
    const {
      estName,
      estAddress,
      city,
      state,
      estNum,
      estPan,
      estIncorporation,
      cancelCheque,
      estAddproof,
      directorSignature,
      empConsent,
      applicantSignature,
    } = this.state;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <Head>
          <title>Provident fund application form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>
            Provident fund application form
          </Title>
          <Paragraph strong>
            Fill in the below form to apply for provident fund registration
            online. It will take less than 5 mins.
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
                    label='Establishment name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your establishment name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your establishment name'
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
                        message: 'Please enter your establishment address!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter yout establishment address'
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
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* est number */}
                  <Form.Item
                    name='estNum'
                    label='Number of establishment'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your number!',
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
                      onChange={this.handleChange('estNum')}
                      value={estNum}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* est PAN */}
                  <Form.Item
                    name='directorPan'
                    valuePropName={estPan}
                    label='PAN no of establishment'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your PAN card document !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEstPan} />
                  </Form.Item>
                </Col>
              </Row>
              {/* attachment */}
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* incorporation certificate */}
                  <Form.Item
                    name='estIncorporation'
                    valuePropName={estIncorporation}
                    label='Certificate of incorporation'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your certificate !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEstIncorporation} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* cancel cheque */}
                  <Form.Item
                    name='cancelCheque'
                    valuePropName={cancelCheque}
                    label='Canceled cheque of establishment'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your canceled cheque!',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadCancelCheque} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* address proof */}
                  <Form.Item
                    name='estAddproof'
                    valuePropName={estAddproof}
                    label='Address Proof of establishment ( rent agreement, Water/  electricity / telephone bill in the name of establishment )'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached required file !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEstAddProof} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* director signature */}
                  <Form.Item
                    name='directorSignature'
                    valuePropName={directorSignature}
                    label='DSC of all directors'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached signature of director !',
                      },
                    ]}>
                    <input
                      type='file'
                      onChange={this.uploadDirectorSignature}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* Consent of majority of employees */}
                  <Form.Item
                    name='empConsent'
                    valuePropName={empConsent}
                    label='Consent of majority of employees in case of voluntary registration'
                    rules={[
                      {
                        required: true,
                        message:
                          'Please attached consent of majority of employees !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEmpConsent} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* Digital Signature of Authorized Applicant  */}
                  <Form.Item
                    name='applicantSignature'
                    valuePropName={applicantSignature}
                    label='Digital signature of authorized applicant ( class - 2 )'
                    rules={[
                      {
                        required: true,
                        message:
                          'Please attached digital signature of applicant !',
                      },
                    ]}>
                    <input
                      type='file'
                      onChange={this.uploadApplicantSignature}
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

export default PfUserForm;
