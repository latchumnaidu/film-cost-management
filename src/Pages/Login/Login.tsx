import React, { useContext, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import { cognitoHelperInstance } from "../../cognito/cognitoHelper";
import NopalContactInfo from "../../Components/nopalcontactinfo";
import { AuthContext } from "../../Contexts/AuthContext";
import { axiosService } from "../../services/axiosService";
import { IHttpClientRequestParameters } from "../../constants/axiosConstants";

const Login: React.FC = () => {
  const {setIsLoggedIn} =  useContext(AuthContext)
    const navigate=useNavigate();
    
    useEffect(() => {
      const getParameters: IHttpClientRequestParameters = {
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        accessToken: 'Bearer'
      }
      axiosService.get(getParameters).then((res) => {
        console.log(res, 'res')
      })
    },[])
    const loginCallBack = (data:any) => {
      setIsLoggedIn(true)
          navigate("/dashboard"); 
        
      };

      const errorCallBack = (err:any) => {
        //dispatch(hideLoader());
        alert(err.message);
      };

    const authenticateUser = (values: any) => {
        //dispatch(showLoader());
        console.log('inside authiateuser fun',values);
        
        cognitoHelperInstance.loginWithPassword(
          values.email,
          values.password,
          loginCallBack,
          errorCallBack
        );
      };

    const onFinish = (values: any) => {
      console.log('Success:', values);
      authenticateUser(values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
        <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <NopalContactInfo />
      </div>
    );
  };;
export default Login;
