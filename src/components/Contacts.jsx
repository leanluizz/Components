import React from "react";
import "../styles/App.css";
import "../styles/Contacts.css";
import WhatsApp from "../image/whatsappIcon.png";
import Waitress from "../image/waitress.png";

export default function Contacts(props) {
    return(
        <div className='contacts' id='contacts'>
    <div>
    <p>Também temos nosso WhatsApp pra atendimento e delivery</p>
    <span>
      <a href="#" target="_blank"><img src={WhatsApp} alt="whpp-icon" /></a>
      </span>
    </div>
    <img src={Waitress} alt="waitress" className='waitress' />
   </div>
    )
}