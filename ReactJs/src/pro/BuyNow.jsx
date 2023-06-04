import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Link } from "react-router-dom";


const BuyNow = () => {
    const pid = useParams();

    const [uid, setUid] = useState(localStorage.getItem('id'));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [payment, setPayment] = useState("cod");
    const [msg, setMsg] = useState("");

    const [spinner, setSpinner] = useState(false);

    let buynow = async (e) => {
        setSpinner(true);
          e.preventDefault();
        setSpinner(true);
        try {
            let res = await fetch('http://127.0.0.1:8000/api/makeorder', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    uid:uid,
                     name: name,
                    email: email,
                    address: address,
                    mobile: mobile,
                    payment: payment,
                    pid: pid.pid
                })
            });
            setSpinner(false);
            let resJson =await res.json();
            if (resJson) {
                setName("");
                setEmail("");
                setAddress("");
                setMobile("");
                setPayment("");
                setMsg(resJson.message);
            } else {
                setMsg("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {spinner && (
                  <div class="loader"><div class="load"></div></div>)}
            <form onSubmit={buynow} className='order-form'>
                <div className='order-div'>
                <input type="text" value={name} className='order-email' placeholder="Enter your name" onChange={(e) => setName(e.target.value)} required/>&nbsp;&nbsp;
                <input type="email" value={email} className='order-email' placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required/>
                <input type="text" value={mobile} className='order-email' placeholder="Enter your mobile no." onChange={(e) => setMobile(e.target.value)} required/>&nbsp;&nbsp;
                <select className='order-email'>
                    <option value={payment} onChange={(e) => setPayment(e.target.value)} >COD</option>
                </select>              <br></br>
                  <textarea  cols={121} rows={5} value={address} className='order-address' placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} required></textarea><br></br>
                <button type='submit'  className='order-buy-btn' >Place Order</button>

                </div>
            </form>
            <div className="model">{msg ? <p>{msg}<br></br>
            <Link to="/products"><button>Back</button></Link>
            </p> : null}
            </div>

        </div>
    )
}

export default BuyNow
