import Header from "../addition page/header";
import { useState } from "react";
import React from 'react';

export default function Contactme(){
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cd2e6e0a-6da7-423d-b1f9-a1034eeb646c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
      alert(`${result}`);
    };
    return(
        <>
        <Header/> 
        <div className="form-controler flex">
        <h1 className="message">Message Me</h1>
        <form  onSubmit={onSubmit}>

            <input type="text" placeholder="Full Name" name="name"></input>
            <input type="text" placeholder="Email" name="email"></input>
            <input type="number" placeholder="Contact number" name="number"></input>
            <textarea className="enquery" placeholder="How may I help you?" name="message"></textarea>
            <div className="contact-button">
        <button type="submit" className="submit-button">Submit Form</button>
            </div>
        </form>
        </div>
        
        </>
    )
}