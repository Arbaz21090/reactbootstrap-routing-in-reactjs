import React from 'react';

import './style.css';
import { Button, Checkbox, Form, Input } from 'antd';

export var Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <div className='container'>
    <div className='row mt-2'>
    <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt='' className='img-fluid' style={{height:'200px', backgroundPosition:'center', backgroundSize:'cover'}}/>
    <h1 className='display-4 text-center mt-2 fw-bolder text-muted'>Login</h1>
 </div>
    <div className='row mt-5'>
 
    <Form
      name="basic"
      labelCol={{
        span: 8,

      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button className='bg-primary text-light'>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};