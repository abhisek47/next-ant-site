import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { Form, Input, Typography, Button, Row, Col, Select, List } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import Head from 'next/head';
import { loadFirebase } from '../lib/db';
import InputStateComponent from '../components/InputStateComponent';

class ItrUserForm extends Component {
  state = {
    name: '',
    address: '',
    city: '',
    state: '',
    itrForm: '',
  };

  //  handle field change
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

  uploadItrForm = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      this.setState({ itrForm: e.target.files[0] });
    }
  };

  onFinish = (values) => {
    let firebase = loadFirebase();
    let db = firebase.firestore();
    let storage = firebase.storage();
    const { name, address, city, state, itrForm } = this.state;
    const uploadForm = storage
      .ref(`income-tax-return/${itrForm.name}`)
      .put(itrForm);
    uploadForm.on(
      'state_changed',
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref('income-tax-return')
          .child(itrForm.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
    db.collection('income-tax-return').add({
      name: name,
      address: address,
      city: city,
      state: state,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    window.location.href = 'https://rzp.io/l/income-tax-return-filing';
    console.log('Received values of form: ', values);
    window.scrollTo(0, 0);
  };

  render() {
    const { name, address, city, state, itrForm } = this.state;
    const services = [
      'Fill in details using a hard-copy of your Form-16',
      'Well guided flow for individuals without Form-16',
      'Best suited for non-salaried or business individuals',
    ];
    const servicesOne = [
      'You can also upload a Form-26AS',
      'You can also upload multiple Form-16s',
    ];
    const { Option } = Select;
    const { Title, Paragraph, Text } = Typography;
    return (
      <>
        <Head>
          <title>ITR Application Form</title>
        </Head>
        <HeaderComponent />
        <div className='container application-form'>
          <Title className='application-title'>
            Income tax return application form
          </Title>
          <Paragraph strong>
            Fill in the below form to apply for income tax return filing. It
            will take less than 5 mins.
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
                  {/* name */}
                  <Form.Item
                    name='name'
                    label='Name of Taxpaye'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your  name!',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your name'
                      onChange={this.handleChange('name')}
                      value={name}
                    />
                  </Form.Item>
                </Col>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* address */}
                  <Form.Item
                    name='address'
                    label='Address'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your address !',
                      },
                    ]}>
                    <Input.TextArea
                      style={{ padding: '8px' }}
                      type='text'
                      placeholder='Enter your address'
                      onChange={this.handleChange('address')}
                      value={address}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* city */}
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
                  {/* state */}
                  <InputStateComponent onStateChange={this.onStateChange} />
                </Col>
              </Row>
              <Row gutter={24} align='top'>
                {/* upload form-16 pdf */}
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  <Form.Item
                    name='itrform'
                    valuePropName={itrForm}
                    label='Do you have a Form-16 PDF ?'
                    rules={[
                      {
                        required: true,
                        message: 'Please attached your Form-16 PDF !',
                      },
                    ]}>
                    <input type='file' onChange={this.uploadItrForm} />
                  </Form.Item>
                  <List
                    dataSource={servicesOne}
                    renderItem={(item) => (
                      <List.Item style={{ margin: '8px 0', padding: '10px 0' }}>
                        <Text>
                          <span className='emoji check'>
                            <CheckCircleFilled />
                          </span>
                          {item}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Col>
                {/* download form */}
                <Col className='ant-col-lg-12 ant-col-sm-24'>
                  {/* <Form.Item
                    name='downloadForm'
                    label='Do not have ITR Form-16 ?'>
                    <Link href={ItrForm}>
                      <Button
                        type='primary'
                        icon={<DownloadOutlined />}
                        size='large'>
                        Download
                      </Button>
                    </Link>
                    <List
                      dataSource={services}
                      renderItem={(item) => (
                        <List.Item
                          style={{ margin: '8px 0', padding: '10px 0' }}>
                          <Text>
                            <span className='emoji check'>
                              <CheckCircleFilled />
                            </span>
                            {item}
                          </Text>
                        </List.Item>
                      )}
                    />
                  </Form.Item> */}
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

export default ItrUserForm;
