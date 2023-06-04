import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [msg, setMsg] = useState("");
    // const [cookies, setCookie] = useCookies(['user']);
    const [spinner, setSpinner] = useState(false);


    let handleSubmit = async (e) => {
      setSpinner(true);
        e.preventDefault();
        try {
          let res = await fetch('http://127.0.0.1:8000/api/contact', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name :name,
              email: email,
              message: message
            })
          });
          setSpinner(false);
          let resJson = await res.json();
          if (resJson) {
            setName("");
            setEmail("");
            setMessage("");
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
      <form onSubmit={handleSubmit} className='contact-form'>
        <h2>Contact Us</h2><br></br>
        <input type="text" value={name} className='loginscreen-email'  placeholder="Enter your name"  onChange={(e) => setName(e.target.value)} required />
        <input   type="email"  value={email} className='loginscreen-email'  placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)} required/>
        <textarea  value={message} className='loginscreen-email' placeholder="Enter your message"  onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit" className='loginscreen-btn'>Send</button>

        <div className="loginscreen-msg">{msg ? <p>{msg}</p> : null}</div>
       
      </form>
    </div>
  )
}

export default Contact
