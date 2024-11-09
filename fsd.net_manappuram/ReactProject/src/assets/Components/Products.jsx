import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton';
import Navbar from './Navbar';




const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data); 
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]); // Price range state
  const [selectedSizes, setSelectedSizes] = useState([]); // Selected sizes
  const [selectedFabric, setSelectedFabric] = useState(""); // Selected fabric
    const [userEmail, setUserEmail] = useState(""); // State for userEmail
  let componentMounted = true;

  useEffect(() => {
    const email = sessionStorage.getItem('userEmail');
    setUserEmail(email); // Set userEmail state
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const handleAddToCart = async (event,product) => {
    event.preventDefault(); // Prevent default form submission if this is in a form
  
    alert("add to cart");
  
    try {
      const response = await fetch('https://localhost:44350/api/Employees/Addtocart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          OrderNo: '00000000-0000-0000-0000-000000000000', // Generate a new GUID for OrderNo
             CustId: userEmail, // Use the userEmail for Customer ID
          ProductID: product.id, // Use the product's ID
          ProductName: product.title, // Use the product's title
          Quantity: 1, // Example Quantity
          Price: product.price.toString(), // Use the product's price and convert to string if needed
          CartStatus: 1 // Exampl// Example Car
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.text(); // Get the error response
        throw new Error(`Registration failed: ${errorData}`);
      }
  
      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  





  const Loading = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />
          <Skeleton height={350} />
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const applyFilters = () => {
    // Apply filters for price range, size, and fabric
    let updatedList = data;

    // Filter by price range
    updatedList = updatedList.filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1]);

    // Filter by size (if size filter is selected)
    if (selectedSizes.length > 0) {
      updatedList = updatedList.filter((item) => selectedSizes.includes(item.size));
    }

    // Filter by fabric
    if (selectedFabric) {
      updatedList = updatedList.filter((item) => item.fabric === selectedFabric);
    }

    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      
      <>
      <div className='buttons d-flex justify-content-center mb-5 pb-5'>
  <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>ALL</button>
  <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
  <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Womens's Clothing</button>


   </div>
        {filter.map((product) => {
          return (
            <div className='col-md-4 mb-4' key={product.id}>
              <div className='card h-100 text-center p-4'>
                <img src={product.image} className='card-img-top' alt={product.title} height='250px' />
                <div className='card-body'>
                  <h5 className='card-title mb-0'>{product.title.substring(0, 12)}</h5>
                  <p className='card-text lead fw-bold'>${product.price}</p>
                  <button className='btn btn-outline-dark' onClick={(event) => handleAddToCart(event, product)}>
                    
                   Add to cart </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="container my-5">
        <div className="row">
          {/* Left Sidebar for Filters */}
          <div className="col-md-3">
            <h4>Filters</h4>

            {/* Price Range Filter */}
            <div className="mb-4">
              <h5>Price Range</h5>
              <input
                type="range"
                min={0}
                max={1000}
                value={priceRange}
                className="form-range"
                onChange={(e) => setPriceRange([0, e.target.value])}
              />
              <p>Up to: ${priceRange[1]}</p>
            </div>

            {/* Size Filter */}
            <div className="mb-4">
              <h5>Size</h5>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="S"
                  onChange={(e) => setSelectedSizes([...selectedSizes, e.target.value])}
                />
                <label className="form-check-label">Small</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="M"
                  onChange={(e) => setSelectedSizes([...selectedSizes, e.target.value])}
                />
                <label className="form-check-label">Medium</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="L"
                  onChange={(e) => setSelectedSizes([...selectedSizes, e.target.value])}
                />
                <label className="form-check-label">Large</label>
              </div>
            </div>

            {/* Fabric Filter */}
            <div className="mb-4">
              <h5>Fabric</h5>
              <select className="form-select" onChange={(e) => setSelectedFabric(e.target.value)}>
                <option value="">Select Fabric</option>
                <option value="cotton">Cotton</option>
                <option value="silk">Silk</option>
                <option value="wool">Wool</option>
              </select>
            </div>

            {/* Apply Filters Button */}
            <button className="btn btn-dark" onClick={applyFilters}>Apply Filters</button>
          </div>

          {/* Product Listing */}
          <div className="col-md-9">
            <h1 className="display-6 fw-bolder text-center">LATEST PRODUCTS</h1>
            <hr />
            <div className="row justify-content-center">
              {loading ? <Loading /> : <ShowProducts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 