// import React, { useEffect,useState } from 'react'
// import "./style.css";
// import { useParams } from 'react-router';
// import Product from './Product';



// const RetPro = () => {
//    const id=useParams() 
//     const [productData,setProductData]=useState([]);
//     const Products11=()=>{    
//         fetch("http://localhost:8000/api/product/"+id.id)
//         .then((response)=>response.json())
//         .then((json)=>{
//             console.log(json)
//             setProductData(json)
//         });
//     };
//     useEffect(() => {
//        Products11()  
//       }, []);
//     return(<>
//         <Product productsData={productData}/>
//         </>
//     )
// }

// export default RetPro
