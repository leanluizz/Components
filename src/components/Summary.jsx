import React from "react";
import "../styles/App.css";
import "../styles/Summary.css";
import CoffeeSimple from "../image/cofee-simple.jpg";
import CoffeeStrawberry from "../image/strawberry-coffee.jpg";
import CoffeeChoco from "../image/coffee-choco.jpg";
import Capuccino from "../image/capuccino-price.jpg";
import Cake from "../image/cake.jpg";
import ChocoCake from "../image/chococake.jpg";
import CakeFruit from "../image/cakefruit.jpg";
import PartyCake from "../image/cakeparty.jpg";

export default function Details (props){
    return(
        <div>
    <h1 className='title-summary'>Experimente um pouco do nosso cardápio abaixo!</h1>
   <details id='CoffeeSumary'>
    <summary>Café</summary>
    <div id='box-details'>
     <div className='item'>
      <img src={CoffeeSimple} width="200vw" alt="" />
      <a href='#'>2$</a>
      <a href='#'>Simple Coffee</a>
     </div>
    <div className='item'>
      <img src={Capuccino} width="200vw" alt="" />
      <a href='#'>3$</a>
      <a href='#'>Capuccino</a>
     </div>
     <div className='item'>
      <img src={CoffeeChoco} width="200vw" alt="" />
      <a href='#'>15$</a>
      <a href='#'>ChoCoffee</a>
     </div>
     <div className='item'>
      <img src={CoffeeStrawberry} width="200vw" alt="" />
      <a href='#'>35$</a>
      <a href='#'>StrawberryCoffee</a>
     </div>
     </div>
  </details>

  <details id='CakesSumary'>
    <summary>Doces</summary>
    <div id='box-details'>
     <div className='item'>
      <img src={Cake} width="200vw" alt="" />
      <a href='#'>5$</a>
      <a href='#'>Cake</a>
     </div>
    <div className='item'>
      <img src={ChocoCake} width="200vw" alt="" />
      <a href='#'>4$</a>
      <a href='#'>ChocoCake</a>
     </div>
     <div className='item'>
      <img src={CakeFruit} width="200vw" alt="" />
      <a href='#'>15$</a>
      <a href='#'>StrawberryCake</a>
     </div>
     <div className='item'>
      <img src={PartyCake} width="200vw" alt="" />
      <a href='#'>18$</a>
      <a href='#'>PartyCake</a>
     </div>
     </div>
  </details>
</div>
  )
}