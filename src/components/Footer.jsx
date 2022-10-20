import React from "react";
import "../styles/App.css";
import "../styles/Footer.css";
import Github from "../image/github.png";
import Linkeidn from "../image/linkedin.png";

export default function Footer (){
    return(
        <footer>
        <div>
          <a href="https://github.com/leanluizz" target="_blank">
            <img src={Github} alt="githublink"  className='github'/>
          </a>
          <a href="https://www.linkedin.com/in/leandro-luiz-a022131bb/" target="_blank">
            <img src={Linkeidn} alt="linkedinlink" className='linkedin' />
          </a>
          <p>Feito por Leandro Luiz Ribeiro Gomes</p>
          <p>Landing page example</p>
        </div>
        <div id='year'>
          <p>&copy;2022</p>
        </div>
         </footer>
    )
}