import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
 


  async function logout(){
   
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');

    localStorage.setItem('status', 0);

    navigate('/login', { replace: true });

  }

  return (
    <>

<nav class="navbar">
<Link to="/" className="navbar-logo">Home</Link>
      <ul class="navbar-links">
          <li>
            <Link to="/products" className="a">Products</Link>
          </li>
          <li>
            <Link to="/orders" className="a">My Orders</Link>
          </li>
          <li>
            <Link to="/contact" className="a">Contact</Link>
          </li>


          { localStorage.getItem('status') === "0" 
        ?
 <>               <li>
          <Link to="/login" ><button className="login-btn">Login</button></Link>
        </li>
        <li >
            <Link to="/register" ><button className="login-btn">Register</button></Link>
          </li></>
          :
          <>
          <li class="navbar-dropdown">
          <Link className="a">Account</Link>
          <div class="dropdown">
            <div className="profile-items">
              <b>Username:</b>
          {localStorage.getItem('name')}
          <br></br>
          <b>Email        &nbsp;&nbsp;:</b>
          {localStorage.getItem('email')}</div>
          <hr ></hr>
        <center>  <button onClick={logout} className="logout-btn" >Logout</button></center>
          </div>
        
     </li></>
}     


        

      </ul>
    </nav>
  







           {/* <button onClick={() => navigate(-1)}>Back</button> */}

      <Outlet />
    </>
  )
};

export default Layout;