import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/login'
import Signup from './Pages/signup'
import About from './Pages/about'
import FoodList from './Pages/food-list'
import Order from './Pages/order'
import Header from './Components/routes'



function App() {
  return (
    <BrowserRouter>
    <div>
     <Header/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='home' element={<Home/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='about' element={<About/>} />
      <Route path='/foodList' element={<FoodList/>} />
      <Route path='/order' element={<Order/>}/>
    </Routes>
    </BrowserRouter>
    // <Router>
      
    //     <Routes>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //     </Routes>
      
    //   </Router>
   
  );
}

export default App;


