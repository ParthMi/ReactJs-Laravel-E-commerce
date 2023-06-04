import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./orderstyle.css";

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [check, setCheck] = useState(false);
  const uid = localStorage.getItem('id');
  useEffect(() => {
    async function getorder() {

      setSpinner(true);

      fetch('http://127.0.0.1:8000/api/myorders/' + uid + '')
        .then((response) => response.json())
        .then((json) => {
          setSpinner(false);
          setOrder(json.data);
          console.log(json.data);
          if(json.data.length===0){
            setCheck(true);
          }
        })
    }
    getorder();
  }, [uid])

  return (
    <div>
      <br></br>
      <h2><center>My Orders</center></h2>

      {spinner && (
          <div class="loader"><div class="load"></div></div>)}
      { check &&
        <center><br></br><br></br><h2>
          Nothing
          <br></br>
          <Link to="/products" ><button className='nothing-btn'>Shop now</button></Link>
        </h2>
        </center>
      }
      {order.map((data) => {

        return (
          <>
          <div class="maindiv">
          <div class="div1">
          <img src={data.product_img} height="200px"></img>
          </div>
          <div class="div2"><br></br>
            <h3>{data.product_name}</h3>
        <h4>₹ {data.product_price}</h4><br></br>
          {/* {data.pid}<br></br> */}
            
      <h4>  Address :   {data.address}<br></br>
           
         Name      &nbsp;&nbsp;&nbsp;:    {data.name}
         </h4> 
            <br></br>
           <h4>Status &nbsp;:   {data.status}</h4>
          </div>
           
            
            </div><hr></hr>
          </>
        )

      }

      )
      }
    </div>
  )
}

export default MyOrders
