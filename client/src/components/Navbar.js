import React from 'react';

const Navbar = () => {
  return ( 
    <div>
    <a href="/">
      <h1>joglogs</h1>
    </a>
    <a href="#">
      <h3>About</h3>
    </a>
    <a href="#">
      <h3>Blog</h3>
    </a>
    <a href="/login">
      <h3>Login</h3>
    </a>
    <a href="/signup">
      <h3>Sign Up</h3>
    </a>
    </div> 
  );
}
 
export default Navbar;