import React, { useEffect,useState } from 'react'
import ProductCard from "./productCard"
import './style.css'


const Products = () => {


    const [productsData,setProductsData]=useState([]);
    const Product=()=>{
        fetch("http://localhost:8000/api/products")
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
            setProductsData(json);
        });
    };
    useEffect(() => {
       Product()
      }, []);
      
    return(<>
        <ProductCard productsData={productsData}/>
       </>
    )
}

export default Products


// function filter(category){
        
//     const updatedList= productsData.filter((curElem)=>{
//         return curElem.category===category;
//     }) 
    
//     setProductsData(updatedList);
// }
// return (
// <>
// <div className='filter'>
//     <button className='filter-btn' onClick={()=>setProductsData(productsData)}>All</button>
//     <button className='filter-btn' onClick={()=>filter("mobile")}>Mobiles</button>
//     <button className='filter-btn' onClick={()=>filter("buds")}>Earbuds</button>
//     <button className='filter-btn' onClick={()=>filter("watch")}>Smart Watch</button>
//     <button className='filter-btn' onClick={()=>filter("accessories")}>Accessories</button>

// </div>