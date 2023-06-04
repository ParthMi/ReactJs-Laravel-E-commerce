import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
// import { useCookies } from 'react-cookie';
import './style.css';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    // const [cookies, setCookie] = useCookies(['user']);
    const [spinner, setSpinner] = useState(false);


    let handleSubmit = async (e) => {
      setSpinner(true);
        e.preventDefault();
        try {
          let res = await fetch('http://127.0.0.1:8000/api/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: email,
              password: password
            })
          });
          setSpinner(false);
          let resJson = await res.json();
          if (resJson) {

            setEmail("");
            setPassword("");
            setMessage(resJson.message);
            if(resJson.status===1){
              //
              localStorage.setItem('status', 1);
              localStorage.setItem('id', resJson.id);
              localStorage.setItem('name', resJson.name);
              localStorage.setItem('email', email);
                // setCookie('id', resJson.id, { path: '/' });
                // setCookie('name', resJson.name, { path: '/' });
                // setCookie('email', email, { path: '/' });
                // setCookie('status', 1, { path: '/' });
                // console.log(cookies)
                navigate("/");
            }
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };


  return (
    <div>
      <div className="loginscreen">
      
      {spinner && (
                  <div class="loader"><div class="load"></div></div>)}
      <form onSubmit={handleSubmit} className='loginscreen-form'>


      <h2>Login</h2><br></br>
        <input type="email" value={email}  placeholder="Email" className='loginscreen-email' onChange={(e) => setEmail(e.target.value)}  />
        <input   type="password"  value={password}  placeholder="Password" className='loginscreen-email' onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='loginscreen-btn'>Login</button>
<br></br><br></br>
        <center><div className="loginscreen-msg">{message ? <p>{message}</p> : null}</div></center>
      </form>
    </div>
    </div>
  )
}

export default Login
