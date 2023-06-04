import React,{useState} from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [spinner, setSpinner] = useState(false);

    let handleSubmit = async (e) => {
      setSpinner(true);
        e.preventDefault();
        try {
          let res = await fetch('http://127.0.0.1:8000/api/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password
            })
          });
                      setSpinner(false);

          let resJson = await res.json();
          if (resJson) {
            setName("");
            setEmail("");
            setPassword("");
            setMessage(resJson.message);
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
      };


  return (
    <div>
      <div className="App">
         {spinner && (
                  <div class="loader"><div class="load"></div></div>)}
      <form onSubmit={handleSubmit} className='register-form'>
        <h2>Register</h2>
        <br></br>
        <input type="text" value={name} className='loginscreen-email' placeholder="Name"  onChange={(e) => setName(e.target.value)}  />
        <input type="email" value={email} className='loginscreen-email'  placeholder="Email"  onChange={(e) => setEmail(e.target.value)}  />
        <input   type="password"  value={password}  className='loginscreen-email' placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='loginscreen-btn'>Register</button>

        <div className='loginscreen-msg'>{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
    </div>
  )
}

export default Register
