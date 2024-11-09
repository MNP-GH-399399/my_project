import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

// Importing CSS for styling

const Orders = () => {
  const [userEmail, setUserEmail] = useState('');
  const [orders, setOrders] = useState([]); // State to hold the fetched orders
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    // Retrieve userEmail from sessionStorage
    const email = sessionStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (userEmail) {
        try {
          const response = await fetch(`https://localhost:44350/api/Employees/Get_cart_products?email=${encodeURIComponent(userEmail)}`, 
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json(); // Assuming the response is in JSON format
          setOrders(data); // Set the fetched orders to state
        } catch (error) {
          setError(error.message); // Set error message if fetch fails
        } finally {
          setLoading(false); // Set loading to false after fetch is complete
        }
      }
    };

    fetchCartItems();
  }, [userEmail]); // Dependency array includes userEmail

  return (
    <div className="orders-container">
      <Navbar />
      <h1>Your Orders</h1>
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching
      ) : error ? (
        <p>Error: {error}</p> // Show error message if fetch fails
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.OrderNo}>
                <td>{order.OrderNo}</td>
                <td>{order.ProductName}</td>
                <td>{order.Price}</td>
                <td>order placed</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
