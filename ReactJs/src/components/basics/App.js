import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from './components/basics/products'
import Productdetails from './components/basics/productdetails';
const App = () => {


  return (
    <>
      <Router><Link to="/product" >product</Link>
        <Routes>
          <Route  path="/product" element={<Productdetails />} />
        </Routes>
      </Router>
      <div>

        <Products />
      </div>
    </>
  )
}

export default App




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
// import Products from './components/basics/products';
// import Productdetails from './components/basics/productdetails';
// function App() {
//   return (
//     <div>
//         <Router>                   <Link to="/">hello</Link>
// <Outlet/>
//    <Routes>

                     
//                           <Route path = "/" component = {<Products />}></Route>
//                           <Route path = "/product" component = {<Productdetails />}></Route>
                    
//                   </Routes>

//         </Router>
//     </div>
    
//   );
// }

// export default App