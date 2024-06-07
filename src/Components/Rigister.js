import React, { useState } from "react";
import { Layout, Flex, Button, Form, Image, Input, Checkbox } from "antd";
import { useNavigate, Link } from "react-router-dom";
import "./rigister.css";
import axios from "axios";

const Rigister = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  /**
   Function to handle user registration:
  - Sends a POST request to the registration endpoint with user data.
  - Redirects the user to the login page after successful registration.
  - Logs any errors that occur during registration.
*/

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "https://recipback.onrender.com/register",
        userData
      );
      console.log(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("eror we found ", error);
    }
  };
//set the form data into state 
  const onFinish = async (values) => {
    setUserData(values);
    console.log(userData);
    handleRegister();
  };

  return (
    <>
      <Flex style={{ backgroundColor: "black", padding: "25px" }}>
        <Layout className="rigister">
          <div className="imgpic">
            <Image
              height={600}
              width={700}
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717459200&semt=sph"
            />
          </div>
          <Form className="formdata" onFinish={onFinish}>
            <h1> Register Form</h1>
            <Form.Item
              label="user name"
              name="email"
              rules={[{ required: true, message: "Please enter valid email" }]}
            >
              <Input placeholder="enter your valid email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="password"
              rules={[
                { required: true, message: "please enter valid user name" },
              ]}
            >
              <Input placeholder="enter your name" />
            </Form.Item>
            <Form.Item
              label="number"
              name="phone"
              rules={[{ required: true, message: "Please enter valid number" }]}
            >
              <Input placeholder="enter your valid number" />
            </Form.Item>
            <Checkbox>accept terms and conditions </Checkbox>
            <p>
              if you have an account Click to <Link to="/Login">LOGIN</Link>{" "}
            </p>
            <Form.Item>
             
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Layout>
      </Flex>
    </>
  );
};

export default Rigister;
