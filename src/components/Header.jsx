import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};
const NavContent = () => (
  <>
    <h2>Avinash..</h2>
    <div>
      
        <a href="#Home">Home </a>
        <a href="#work">Work </a>
        <a href="#timeline">Exeperience</a>
        <a href="#services">Services</a>

        <a href="#testimonial">Testimonial </a>
        {/* <a href="#Contact">Contact </a> */}
      </div>
      <a href="mailto:avinashrathod55252@gmail.com">
        <button>E-mail</button>
      </a>
    
  </>
);

export default Header;
