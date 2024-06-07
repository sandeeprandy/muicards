import Header from "../Components/Header";
import ProductLists from "../Components/ProductLists";
import {FacebookOutlined, TwitterOutlined ,InstagramOutlined,LinkedinOutlined,UserOutlined  } from '@ant-design/icons';
import { Space } from 'antd';



function HomePage() {

    //products to show 
  const products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High performance laptop for work and play.',
      image: 'https://source.unsplash.com/featured/?laptop'
    },
    {
      id: 2,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones.',
      image: 'https://source.unsplash.com/featured/?headphones'
    },
    {
      id: 3,
      name: 'Camera',
      description: 'Digital camera with high resolution.',
      image: 'https://source.unsplash.com/featured/?camera'
    },
    {
      id: 4,
      name: 'Smartphone',
      description: 'Latest model smartphone with high-resolution display.',
      image: 'https://source.unsplash.com/featured/?smartphone'
    },
    {
      id: 5,
      name: 'Smartwatch',
      description: 'Smartwatch with fitness tracking features.',
      image: 'https://source.unsplash.com/featured/?smartwatch'
    },
    {
      id: 6,
      name: 'Tablet',
      description: 'Lightweight and portable tablet for work and play.',
      image: 'https://source.unsplash.com/featured/?tablet'
    }
  ];
  
  
  return (
    <div>
      <Header />
      <div style={{padding: "20px"}}>
        <ProductLists products={products} />
      </div>
      <footer style={{backgroundColor:"black" ,textAlign:"center", color:"white",padding:"15px"}} > <h1>CONTACT US </h1> 
       <Space style={{padding:"15px"}} >
       <FacebookOutlined className="icon" style={{ fontSize: "50px" }} />
      <TwitterOutlined className="icon" style={{ fontSize: "50px" }} />
      <InstagramOutlined className="icon" style={{ fontSize: "50px" }} />
      <LinkedinOutlined className="icon" style={{ fontSize: "50px" }} />
      <UserOutlined className="icon" style={{ fontSize: "50px" }} />
    
     </Space>
       </footer>
    </div>
  );
}

export default HomePage;
