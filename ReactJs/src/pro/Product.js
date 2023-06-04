import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useNavigate, Link } from "react-router-dom";
import "./productstyle.css";

const Product = () => {
  const navigate = useNavigate();
  const id = useParams();


  const [product, setProduct] = useState();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    async function getProduct() {
      setSpinner(true);

      fetch("http://localhost:8000/api/product/" + id.id)
        .then(async (response) => await response.json())
        .then((json) => {
          setSpinner(false);
          setProduct([json]);
        });
    };

    if (localStorage.getItem('status') === "1") {
      getProduct();
    }
    else {
      navigate('/login', { replace: true });
    }

  }, [id]);
  console.log(product);










  return (
    <>
      {spinner && (
        <div class="loader"><div class="load"></div></div>

      )}
      <br></br>
      {product?.map((product) => {
        return (
          <>
            <div class="rowstart">
            
              <div class="product-img" key={product.pid}>
                <img src={product.product_img}></img>
                </div>
                
                <div class="pro-name">
                  <br></br><br></br><br></br><br></br>
                  <h3>{product.product_name}</h3>
                  <div class="price-div">
                    <span class="fa">₹ {product.product_price}</span>
                  </div>
                  <div class="about-product"><br></br>
                    <h3 style={{ color: "gray" }}>About the product</h3>
                    {product.product_description}
                  </div>

                  <hr class="min600buybtn"></hr>
                  <div class="buy-btn2">
                    <Link to={"/products/" + product.pid + "/buynow"}><button class="buy-btn1">Buy now</button></Link> </div>

                </div>

                <div class="buy-btn">
                  <Link to={"/products/" + product.pid + "/buynow"}><button class="buy-btn1"> BUY NOW</button></Link>
                </div>

             
            </div>
          </>

        )
      })}
    </>
  )
}
export default Product
