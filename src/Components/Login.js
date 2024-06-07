import React, { useState} from "react";
import { Layout, Flex, Button, Form, Image, Input, Checkbox } from "antd";
import { useNavigate, Link } from "react-router-dom";
import "./rigister.css";
import axios from "axios";
import { DNA } from "react-loader-spinner";

const Login = () => {
  const [loginData, setLoginData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
 

  /**
   * function to handle the login from
   * send the post request to login endpoint with login form data
   * after successfully login navigate the url to Homepage
   */
 
    const handleLogin = async () => {
      try {
        const response = await axios.post(
          "https://recipback.onrender.com/login",
          loginData
        );
        setLoading(false);
        console.log("Login successful");

        console.log(response.status);
        navigate("/Homepage");
      } catch (error) {
        console.error("Invalid email or password", error);
      }
    };
 

  //set the form data into state data and call  handleLogin function
  const onFinish = (values) => {
    setLoginData(values);
    localStorage.setItem("username", loginData.email);
    handleLogin()

  
  };

  return (
    <div>
      {" "}
      {loading ? (
        <Flex style={{ backgroundColor: "black", padding: "25px" }}>
          <Layout className="rigister">
            <div className="imgpic ">
              <Image
                width={700}
                height={600}
                src="https://img.lovepik.com/element/45009/2860.png_860.png"
              />
            </div>
            <Form className="formdata" onFinish={onFinish}>
              <h1> Login form</h1>
              <Form.Item
                label="user name"
                name="email"
                rules={[
                  { required: true, message: "Please enter valid email" },
                ]}
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
              <Checkbox>Remind me</Checkbox>
              <p>
                if you dont have an account click <Link to="/">here</Link>{" "}
              </p>

              <Form.Item>
                {" "}
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>{" "}
              </Form.Item>
            </Form>
          </Layout>
        </Flex>
      ) : (
        <div className="dna-wrapper">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
    </div>
  );
};

export default Login;
