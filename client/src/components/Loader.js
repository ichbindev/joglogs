import React from 'react';

const Loader = () => {
  return (  
  <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <br/>
      <span className="sr-only">Loading...</span>
      <br/>
    </div>
  </div> 
);
}
 
export default Loader;