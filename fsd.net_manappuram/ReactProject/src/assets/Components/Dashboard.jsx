import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img11 from '../images/dress.jpg'
import img1 from '../images/menwear.jpg'
import img2 from '../images/saree.jpg'
import img3 from '../images/kidsss.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Box, Typography } from '@mui/material'; // Importing Box and Typography for footer

const Dashboard = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Main content */}
      <div style={{ flex: 1 }}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              position="fixed"
              src="https://m.media-amazon.com/images/G/31/img24/Fashion/Event/Jupiter24/AF/Phase1/TopHeroPC/Kids_clothing._CB562166880_.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/G/31/img24/Fashion/Event/Jupiter24/AF/Phase1/TopHeroPC/Premium_Brands._CB562166880_.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Jupiter24/PC/StealDeal_PC._SX3000_QL85_.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <CardGroup>
          <Card sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>T-SHIRTS</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img11} />
            <Card.Body>
              <Card.Title>KURTAS</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title> SAREES</Card.Title>
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
              <Card.Title>KIDS WEAR</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>

      {/* Footer for Contact Details */}
      <Box 
        component="footer" 
        sx={{ 
          py: 3, 
          px: 2, 
          mt: 'auto', 
          backgroundColor: 'purple', 
          color: 'white', 
          textAlign: 'center' 
        }}
      >
        <Typography variant="h6">
          Contact Us
        </Typography>
        <Typography variant="body1">
          Email: contact@elegance.com | Phone: +123 456 7890
        </Typography>
        <Typography variant="body2" color="lightgray">
          Address: 123 Fashion Avenue, City, Country
        </Typography>
      </Box>
    </div>
  );
}

export default Dashboard;
