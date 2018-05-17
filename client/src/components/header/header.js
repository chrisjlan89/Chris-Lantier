import React from "react";



 const Header = (props) =>  {
  return (
    <div>
  <div className="header">
    
  
  
      <h1 className="header--primary">Chris Lantier</h1>
     
  </div>
  <div className = "row">
  <div className="col-1-of-3">
  <section className="area">
  <div className="area__portrait">
    <img className='chris-por' src="./src/assets/img/chris-prof.jpg"></img>
  </div>
  <div className="area__text">
    <p className = "self-description">Full stack web developer possessing a deep JavaScript skillset and an innate ability to apply and learn any libraries and frameworks. 
    Very adept in backend skillset with a high level of understanding express, REST APIs and endpoints, 
    coupled with an excellent skillset in database management and deep understanding of React. Constantly improving front-end skills as well, with the ability
    to write SASS CSS in a BEM methodolgy, for clean organinzed markup and styling.
    
    </p>
  </div>
  </section>
  </div>
  </div>
  </div>
  )
} ;

export default Header;