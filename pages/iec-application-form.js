import React, { Component } from 'react';
import { Form, Typography, Button, Row, Col, Select, Radio, Input } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import { loadFirebase } from '../lib/db';
import Head from 'next/head';
import InputStateComponent from '../components/InputStateComponent';

class IecUserForm extends Component {
  state = {
    applicantName: '',
    applicantAddress: '',
    city: '',
    state: '',
    applicantNum: '',
    applicantPan: '',
    applicantAdhaar: '',
    applicantAddProof: '',
    applicantNoc: '',
    cancelCheque: '',
    applicantDsc: '',
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    let storage = firebase.storage();
    const {
      applicantName,
      applicantAddress,
      city,
      state,
      applicantNum,
      applicantPan,
      applicantAdhaar,
      applicantAddProof,
      applicantNoc,
      cancelCheque,
      applicantDsc,
    } = this.state;
    db.collection('import-export-code').add({
      applicantName: applicantName,
      applicantAddress: applicantAddress,
      city: city,
      state: state,
      applicantNum: applicantNum,
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

  uploadApplicantPan = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ applicantPan: e.target.files[0] });
    }
  };

  uploadApplicantAdhaar = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ applicantAdhaar: e.target.files[0] });
    }
  };

  uploadApplicantAddProof = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ applicantAddProof: e.target.files[0] });
    }
  };

  uploadApplicantNoc = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ applicantNoc: e.target.files[0] });
    }
  };

  uploadCancelCheque = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ cancelCheque: e.target.files[0] });
    }
  };

  uploadApplicantDsc = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ applicantDsc: e.target.files[0] });
    }
  };

  render() {
    const {
      applicantName,
      applicantAddress,
      city,
      state,
      applicantNum,
      applicantPan,
      applicantAdhaar,
      applicantAddProof,
      applicantNoc,
      cancelCheque,
      applicantDsc,
    } = this.state;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <Head>
          <title>Import export application form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>
            Import export application form
          </Title>
          <Paragraph strong>
            Fill in the below form to apply for Import export code registration
            online. It will take less than 5 mins.
          </Paragraph>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Title level={4}>Applicant Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* applicant name */}
                  <Form.Item
                    name='applicantName'
                    label='Applicant name'
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
                      onChange={this.handleChange('applicantName')}
                      value={applicantName}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* applicant address */}
                  <Form.Item
                    name='applicantAddress'
                    label='Applicant address'
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
                      onChange={this.handleChange('applicantAddress')}
                      value={applicantAddress}
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
                  {/* applicant number */}
                  <Form.Item
                    name='applicantNum'
                    label='Applicant number'
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
                      onChange={this.handleChange('applicantNum')}
                      value={applicantNum}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* applicant PAN */}
                  <Form.Item
                    name='applicantPan'
                    valuePropName={applicantPan}
                    label='Copy of PAN card'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your PAN card document !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadApplicantPan} />
                  </Form.Item>
                </Col>
              </Row>
              {/* attachment */}
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* adhaar card */}
                  <Form.Item
                    name='applicantAdhaar'
                    valuePropName={applicantAdhaar}
                    label='Copy of aadhaar card / voter identity card of applicant'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your documents !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadApplicantAdhaar} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* address proof */}
                  <Form.Item
                    name='applicantAddProof'
                    valuePropName={applicantAddProof}
                    label='Telephone bill / mobile postpaid bill / electricity bill / rent agreement / lease deed / sale deed / partnership deed as a address proof'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your address proof !',
                      },
                    ]}>
                    <input
                      type='file'
                      onChange={this.uploadApplicantAddProof}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* noc */}
                  <Form.Item
                    name='applicantNoc'
                    valuePropName={applicantNoc}
                    label='In case the address proof is not in the name of the applicant firm, a No Objection Certificate(NOC) by the firm premises owner in favour of the firm along with the address proof is to be submitted as a single PDF document'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached required file !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadApplicantNoc} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* cancel cheque */}
                  <Form.Item
                    name='cancelCheque'
                    valuePropName={cancelCheque}
                    label='Cancelled cheque of individual / enterprise having name printed on cheque.'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached copy of cancel cheque !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadCancelCheque} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* digital signature */}
                  <Form.Item
                    name='applicantDsc'
                    valuePropName={applicantDsc}
                    label='Digital signature or adhaar OTP'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your digital signature !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadApplicantDsc} />
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

export default IecUserForm;
