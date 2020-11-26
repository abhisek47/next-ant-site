import React, { Component } from 'react';
import { Form, Input, Typography, Button, Row, Col, Select } from 'antd';
import HeaderComponent from '../components/HeaderComponent';
import Head from 'next/head';
import { loadFirebase } from '../lib/db';
import InputStateComponent from '../components/InputStateComponent';

class EsiUserForm extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    noOfEmployee: '',
    regCertificate: '',
    companyCertificate: '',
    article: '',
    cancelCheck: '',
    directorList: '',
    shareholderList: '',
    employeeList: '',
    pan: '',
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

  uploadRegCertificate = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ regCertificate: e.target.files[0] });
    }
  };

  uploadCompanyCertificate = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ companyCertificate: e.target.files[0] });
    }
  };

  uploadArticle = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ article: e.target.files[0] });
    }
  };

  uploadEmployeeList = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ employeeList: e.target.files[0] });
    }
  };

  uploadPan = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ pan: e.target.files[0] });
    }
  };

  uploadCancelCheck = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ cancelCheck: e.target.files[0] });
    }
  };

  uploadDirectorList = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ directorList: e.target.files[0] });
    }
  };

  uploadShareholderList = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ shareholderList: e.target.files[0] });
    }
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    let storage = firebase.storage();
    const {
      name,
      address,
      city,
      state,
      noOfEmployee,
      regCertificate,
      companyCertificate,
      article,
      employeeList,
      pan,
      cancelCheck,
      directorList,
      shareholderList,
    } = this.state;
    const upldregCertificate = storage
      .ref(`esi/${regCertificate.name}`)
      .put(regCertificate);
    upldregCertificate.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(regCertificate.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldCompanyCertificate = storage
      .ref(`esi/${companyCertificate.name}`)
      .put(companyCertificate);
    upldCompanyCertificate.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(companyCertificate.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldArticle = storage.ref(`esi/${article.name}`).put(article);
    upldArticle.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(article.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldEmployeeList = storage
      .ref(`esi/${employeeList.name}`)
      .put(employeeList);
    upldEmployeeList.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(employeeList.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldPan = storage.ref(`esi/${pan.name}`).put(pan);
    upldPan.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(pan.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldCancelCheck = storage
      .ref(`esi/${cancelCheck.name}`)
      .put(cancelCheck);
    upldCancelCheck.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(cancelCheck.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldDirectorList = storage
      .ref(`esi/${directorList.name}`)
      .put(directorList);
    upldDirectorList.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(directorList.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    const upldShareholderList = storage
      .ref(`esi/${shareholderList.name}`)
      .put(shareholderList);
    upldShareholderList.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('esi')
          .child(shareholderList.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    db.collection('esi').add({
      name: name,
      address: address,
      city: city,
      state: state,
      noOfEmployee: noOfEmployee,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Received values of form: ', values);
    window.location.href = 'https://rzp.io/l/esi-filing';
    window.scrollTo(0, 0);
  };

  render() {
    const {
      name,
      address,
      city,
      state,
      regCertificate,
      companyCertificate,
      article,
      noOfEmployee,
      employeeList,
      pan,
      cancelCheck,
      directorList,
      shareholderList,
    } = this.state;
    const { Option } = Select;
    const { Title, Paragraph } = Typography;
    return (
      <>
        <Head>
          <title>ESI application form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>ESI Application Form</Title>
          <Paragraph strong>
            Fill in the below form to apply for ESI registration online. It will
            take less than 5 mins.
          </Paragraph>
          <div className='steps-content'>
            <Form
              layout='vertical'
              className='form-container login-form'
              name='normal_login'
              initialValues={{ remember: true }}
              onFinish={this.onFinish}>
              <Title level={4}>Unit Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/*  name */}
                  <Form.Item
                    name='name'
                    label='Name of Establishment'
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
                    label='Address of Establishment'
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
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* regCertificate */}
                  <Form.Item
                    name='regCertificate'
                    valuePropName={regCertificate}
                    label='Registration certificate obtained either under the: a. Factories Act b.Shops and Establishment Act'
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
                  {/* companyCertificate */}
                  <Form.Item
                    name='companyCertificate'
                    valuePropName={companyCertificate}
                    label='Certificate of Registration in case of Company, and Partnership deed in case of a Partnership'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your company certificate !',
                      },
                    ]}>
                    <input
                      type='file'
                      onChange={this.uploadCompanyCertificate}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* article */}
                  <Form.Item
                    name='article'
                    valuePropName={article}
                    label='Memorandum of Association and Articles of Association of the Company'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached required file !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadArticle} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* cancel check */}
                  <Form.Item
                    name='cancelCheck'
                    valuePropName={cancelCheck}
                    label='Cancelled cheque of the Bank Account of the Company'
                    rules={[
                      {
                        required: true,
                        message:
                          'Please attached your cancelled cheque of the Bank !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadCancelCheck} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* directorList */}
                  <Form.Item
                    name='directorList'
                    valuePropName={directorList}
                    label='List of Directors of the Company'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached list of directors !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadDirectorList} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-8 ant-col-sm-24'>
                  {/* shareholderList */}
                  <Form.Item
                    name='shareholderList'
                    valuePropName={shareholderList}
                    label='List of the Shareholders of the Company'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached list of the shareholders !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadShareholderList} />
                  </Form.Item>
                </Col>
              </Row>
              <Title level={4}>Employee Information</Title>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* no of employee */}
                  <Form.Item
                    name='noOfEmployee'
                    label='Total no of employees'
                    rules={[
                      {
                        required: true,
                        message: 'Please input no of employees !',
                      },
                    ]}>
                    <Input
                      style={{ padding: '8px' }}
                      type='number'
                      placeholder='Enter no of employees'
                      onChange={this.handleChange('noOfEmployee')}
                      value={noOfEmployee}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'></Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* employee list */}
                  <Form.Item
                    name='employeeList'
                    valuePropName={employeeList}
                    label='List of all the employees working in the Establishment'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached list of directors !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadEmployeeList} />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* pan */}
                  <Form.Item
                    name='pan'
                    valuePropName={pan}
                    label='PAN Card of the Business Entity as well as all the Employees working under the entity'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your PAN card details !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadPan} />
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

export default EsiUserForm;
