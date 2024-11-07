import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skeleton from 'react-loading-skeleton';
import Navbar  from './Navbar';
import { NavLink } from 'react-router-dom';

function handleAddToCart() {
  alert("add to cart");
 
  toast.success("Added to Cart");
}

const Products = () => {

  const [data,setData]=useState([]);
  const [filter,setFilter]=useState(data);
  const [loading,setLoading]=useState(false);
  let componentMounted=true;

  
  useEffect(()=>{
   const getProducts=async()=>{
    setLoading(true);
    const response=await fetch("https://fakestoreapi.com/products")

   if(componentMounted){

    setData(await response.clone().json());
    setFilter(await response.json());
    setLoading(false);
     console.log(filter);
   }
  
   return ()=>{

    componentMounted=false
   }
  
  }
   getProducts();
    

  },[]);

  const Loading =()=>{

    return(<>
    
    <div className='col-md-3'>
      <Skeleton height={350}/>
      <Skeleton height={350}/>
      <Skeleton height={350}/>
    </div>
    </>)
  }

  const filterProduct =(cat)=>{

    const updatedList =data.filter((x)=>x.category===cat);
    setFilter(updatedList);
  }

  const ShoowProducts=()=>{
    return(
      <>
 <div className='buttons d-flex justify-content-center mb-5 pb-5'>
   <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>ALL</button>
   <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
   <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Womens's Clothing</button>


    </div>
{filter.map((product)=>{

  return(

    <>
   
   <div class='card h-100 text-center p-4' key={product.id}>
<img src={product.image} className='card-img-top' alt={product.title} height='250px'/>
<div class='car-body'>
  <h5 class='card-title mb-0'>{product.title.substring(0,12)}</h5>
  <p class='card-text lead fw-bold'>

    ${product.price}
  </p>
  <button className='btn btn-outline-dark ' onClick={handleAddToCart}>
  BUY NOW
          </button>
 
</div>
</div>
  
    </>
  )

  
})



}
      </>
    )

   
  }

  return (
   
    <div>
       <Navbar/>
      <div className='container my-5 py-5'>
        <div className='row'>
          <h1 className='dsiplay-6 fw-bolder'>LATEST PRODUCTS</h1>
        </div>
      </div>
      <div className='row justify-content-center'></div>
   {loading?<Loading/>:<ShoowProducts/>}

    </div>

  )
}

export default Products
