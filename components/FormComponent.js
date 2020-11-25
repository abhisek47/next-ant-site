import React, { useContext, useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Router from 'next/router';

const FormComponent = ({ tagline, id }) => {
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    Router.push(`${id}`);
  };
  const { Title } = Typography;
  return (
    <>
      <div className='login-form'>
        <Card>
          <Typography>
            <Title level={4}>{tagline}</Title>
          </Typography>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <Form.Item
              name='email'
              rules={[{ required: true, message: 'Please input your Email!' }]}>
              <Input
                style={{ padding: '10px' }}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                prefix={<MailOutlined className='site-form-item-icon' />}
                placeholder='Email address'
              />
            </Form.Item>
            <Form.Item
              name='number'
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone number!',
                },
                {
                  pattern: /^[2-9]{2}\d{8}$/,
                  message: 'Please input 10 digit number!',
                },
              ]}>
              <Input
                style={{ padding: '10px' }}
                prefix={
                  <PhoneOutlined rotate='90' className='site-form-item-icon' />
                }
                type='number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='Phone number'
              />
            </Form.Item>
            <Form.Item style={{ margin: 0 }}>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                className='login-form-button'>
                Buy now
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default FormComponent;
