import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img11 from '../images/images11.jpg'
import img1 from '../images/images1.jpg'
import img2 from '../images/teete.avif'
import img3 from '../images/FURNI.jpg'
import { textFieldClasses } from '@mui/material'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Dashboard = () => {

 return (
      <div >
           <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          position="fixed"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a417fdf5a82818c4.jpg?q=20"
          
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d9290fb51138d286.png?q=20"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
    <CardGroup>
      <Card sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <Card.Img variant="top"  src={img1} />
        <Card.Body>
          <Card.Title>SMART MOBILES</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={img11} />
        <Card.Body>
          <Card.Title>BRAND LABTOPS</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>AIR COOLERS</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>WOOD FURNITURES</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
      </div>
      
  )
}

export default Dashboard
