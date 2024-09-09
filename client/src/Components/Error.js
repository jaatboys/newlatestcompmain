import React, { Component } from "react";

import Errorsimg from '../assets/CodeExamplerPageNotFound.png';

export default class Error extends Component {

  render() {
    return (
      <div >
       
<a href="/" alt="CodeExampler Learn Free Coding Website 404 Page">
  <img
          src={Errorsimg}
              width="100%"
              alt="codeExampler Website 404 Page"
            /></a>
<br/>
  </div>
    
     
    
    );
  }
}