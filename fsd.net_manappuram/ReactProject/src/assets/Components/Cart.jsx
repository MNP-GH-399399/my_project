import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component

const Cart = () => {
    const [cartItems, setCartItems] = useState([]); // Start with an empty array
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false); // State for popup visibility

    useEffect(() => {
        // Retrieve userEmail from sessionStorage
        const email = sessionStorage.getItem('userEmail');
        if (email) {
            setUserEmail(email);
        }

        const fetchCartItems = async () => {
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

                const items = await response.json(); // Parse the JSON response
                console.log('Fetched cart items:', items); // Debugging statement
        
                // Map the items to the expected structure
                const formattedItems = items.map(item => ({
                    id: item.OrderNo, // Use OrderNo as the unique identifier
                    email: item.CustId,
                    quantity: item.Quantity,
                    name: item.ProductName,
                    price: parseFloat(item.Price), // Ensure price is a number
                }));
        
                setCartItems(formattedItems);            
            } catch (err) {
                setError('Failed to fetch cart items');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (userEmail) {
            fetchCartItems(); // Call the API only if userEmail is available
        }
    }, [userEmail]); // Dependency array includes userEmail

    const closePopup = () => {
        setIsPopupVisible(false); // Hide the popup
    };
    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };


    const handleCheckout = async () => {
        setIsPopupVisible(true);
    
        try {
            for (const item of cartItems) {
                const orderDetail = {
                    OrderNo: item.id, // Assuming you want to use the item ID as OrderNo
                    CustId: userEmail, // Use the user's email as CustId
                    ProductName: item.name, // Corrected to access the property directly
                    Quantity: item.quantity, // Use the actual quantity from the cart
                    Price: item.price, // Use the actual price from the cart
                };
                const response = await fetch('https://localhost:44350/api/Employees/AddtoOrder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderDetail),
                });
    
                if (!response.ok) {
                    const errorText = await response.text(); // Get the response text
                    throw new Error(`Failed to process checkout for item: ${item.name}. Response: ${errorText}`);
                }
    
                const result = await response.json();
                alert('order placed suceesfully')
                console.log('Checkout successful for item:', result);
            }
    
            // Clear the cart after successful checkout
            setCartItems([]);
            closePopup(); // Close the popup
        } catch (error) {
            console.error('Error during checkout:', error);
            // Optionally, set an error state to display an error message
        }
    };
    




    // const handleCheckout = () => {
    //     setIsPopupVisible(true); // Show the popup when the button is clicked
    // };
    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="cart-page">
            <Navbar />
            <br></br>
            <br></br>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.ProductName} /> {/* Ensure you have an image source */}
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <label>
                                        Quantity:
                                        <span>{item.quantity}</span> {/* Display the quantity as text */}
                                    </label>

                                    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                  

                    <h2>Total: ${calculateTotal()}</h2>
                    <button className="checkout-button"  onClick={handleCheckout}>Proceed to Checkout</button>
                </div>
            )}
                {isPopupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Checkout Confirmation</h2>
                        <p>Are you sure you want to proceed to checkout?</p>
                        <button onClick={closePopup}>Cancel</button>
                        <button onClick={handleCheckout}>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
