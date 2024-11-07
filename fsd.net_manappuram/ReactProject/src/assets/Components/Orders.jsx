import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { AppBar } from "@mui/material";
import Typography from "@mui/material";

export const Orders = () => {
  const [data, setData] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <AppBar position="static"  sx={{backgroundColor:'#blue'}}>
       <Typography variant="h6">
          ONLINE SHOPPING
          </Typography>
          </AppBar>
      {data.map((dataObj) => (
        
        <Card key={dataObj.id} className="mb-3" width='334px' >
          <Card.Img  className='card-img-top' width='334px' height='250px' src={dataObj.image} />
          <Card.Body>
            <Card.Title>{dataObj.title}</Card.Title>
            <Card.Text>{dataObj.description}</Card.Text>
            <Card.Text>Price: ${dataObj.price}</Card.Text>
          </Card.Body>
        </Card>
       
      ))}
    </div>
  );
};

