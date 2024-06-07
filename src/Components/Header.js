import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
import {Link} from "react-router-dom"
import "./Homepage.css"

function Header() {
  const username = localStorage.getItem("username");
  console.log(username);

 
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="maincntr" >
          <div>
          <h1>
            Hallo mr. <span> {username} </span>{" "}
          </h1>
          </div>
          <div style={{gap:"10px"}} >
            <Popover content={username} title="user name">
              <UserOutlined style={{ fontSize: "40px" }} />
            </Popover>

            <ShoppingCartOutlined style={{ fontSize: "40px" }} /> 
            <Popover content="Clik here" title="Log out" >
           
            <Link style={{color:"white"}} to="/" > <LogoutOutlined style={{ fontSize: "35px" }} /> </Link>
            </Popover>
           
            
           

          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
