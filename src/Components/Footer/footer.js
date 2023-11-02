import React from 'react'
import './footer.css'

const footer = () => {
    const FooterComponent = () => {
        return (
          <div className="ftr">
            <p>&copy; 2023 Tasty Traverse. All rights reserved.</p>
                  <p>123 Kochi, Kerala, India</p>
                  {/* <a href="/"><img src="./facebook-icon.png" alt="Facebook" /></a>
        <a href="/"><img src="./twitter-icon.png" alt="Twitter" /></a>
        <a href="/"><img src="./instagram-icon.png" alt="Instagram" /></a> */}
                  
            
           
          </div>
        );
      };
  return (
    <FooterComponent/>
  )
}

export default footer