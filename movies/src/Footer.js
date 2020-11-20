import React, { Component } from "react";


class FooterBar extends Component {
  render() {
    return (
      <footer className="pt-4 my-md-5 pt-md-5 border-top bg-dark page-footer">
        <div className="text-center text-light">
          <h3>This Website was made by</h3>
        </div>
        <br></br>
        <br></br>
        <div className="container ">
          <div className="row">
            <div className="col-6 col-md-4 ">
              <h5 className="text-center text-light">Sara Mohammed</h5>
              

             
            </div>
            <div className="col-6 col-md-4">
              <h5 className="text-center text-light">Toqa Emad </h5>
             
             
            </div>
            <div className="col-6 col-md-4">
              <h5 className="text-center text-light">Ahmed Amar</h5>
              
             
            </div>
          </div>
          
          <div className="row">
            <div className="col-6 col-md-4 ">
              <h5 className="text-center text-light">Noor Refat</h5>
              

             
            </div>
            <div className="col-6 col-md-4">
              <h5 className="text-center text-light">Aya Issam  </h5>
             
             
            </div>
          
          </div>
         
       
        </div>
      </footer>
    );
  }
}
export default FooterBar;