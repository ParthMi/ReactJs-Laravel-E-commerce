import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './productsstyle.css';

const Products = () => {



    const [productsData, setProductsData] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {

        async function getProducts() {
            setSpinner(true);

            fetch("http://localhost:8000/api/products")
                .then((response) => response.json())
                .then((json) => {
                    setSpinner(false);
                    setProductsData(json);
                });
        };
        getProducts();
    }, []);








    return (

        <>
            {spinner && (
                <div class="loader"><div class="load"></div></div>)}
<br></br>
            <div class="container" >
                <div class="cards">
                    {productsData.map((curElem) => {
                        return (
                            <>
                                <Link to={"/products/" + curElem.pid} class="products-link">
                                    <div className="card" key={curElem.pid}>
                                        {/* style="max-width: 180px;max-height:150px" */}
                                        <center> <img class="pls-img" src={curElem.product_img} ></img></center>
                                        <br></br> <span class="pls-name">{curElem.product_name}</span><br></br>
                                        <span class="pls-price">
                                            <span class="fa">₹
</span> {curElem.product_price}
                                        </span>
                                    </div>
                                </Link>



                            </>

                        )
                    })}</div>
            </div>
        </>
    )
}

export default Products
