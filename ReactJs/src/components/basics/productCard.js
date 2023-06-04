import React from 'react'
const ProductCard = ({ productsData }) => {
    return (
        <>
            <div>
                <input type="text" />
            </div>
            <div className='display'>
                {productsData.map((curElem) => {
                    return (
                        <>
                                    <div className="product-card"  key={curElem.pid}>

                                    <div >
                                        <center>    <img className="product-image" src={curElem.product_img} alt="" />
                                        </center></div>
                                    <div className='product-details'>
                                        <div className="product-name">
                                            {curElem.product_name}
                                        </div>
                                        <div className="product-price">
                                            ₹ {curElem.product_price}
                                        </div>
                                        <div className="product-type">
                                            {curElem.product_description}
                                        </div>

                                    </div>
                                </div>
                                 

                            </>

                            )
                })}
                        </div>
        </>
            )
}
 export default ProductCard
