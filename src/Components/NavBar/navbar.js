import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'


function navbar() {
    
    const Title = () => <h1 className="title" >Tasty Traverse</h1>;
    
    const HeaderComponent = () => {
    
      return (
        <div className="header">
        
        <Title />
          <div className="nav-items">
            
          <ul className="horizontal-list">
           <li ><Link className="nav-item" to="/">Home</Link></li>
           <li ><Link className="nav-item" to="/about">About</Link></li>
            {/* <Link to="/">Home</Link> */}
           <li><Link className="nav-item" to="/login">Login</Link></li>

            
          </ul>
        </div>
        </div>
      );
    };
  return (
    <div>
        < HeaderComponent/>
    </div>
    
  )
}

export default navbar