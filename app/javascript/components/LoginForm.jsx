import React, { useState } from "react";


const Loginform = () => {

  return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <h3 className="display-4">Please Log in</h3>
          </div>
          <form action = {window.location.href} method= "post">
            
            <input type="hidden" name="authenticity_token" value={document.querySelector('meta[name=csrf-token]').content}/>
            <input type="email" id="login" className="fadeIn second" name="email" placeholder="email"/>
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
            <input type="submit" className="fadeIn fourth" value="Log In"/>
          </form>
        </div>
      </div>
  )
}

export default Loginform 