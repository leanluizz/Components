import React from "react";
 import "../styles/App.css";
  import "../styles/Section.css";
  import CoffeImageOne from "../image/coffee-info-image.jpg";
 import CoffeImageTwo from "../image/coffee-info-image-two.jpg";
  import CoffeImageThree from "../image/coffee-info-image-three.jpg";
   import CoffeImageFour from "../image/coffee-info-image-four.jpg";

export default function Section(props) {
    return(
        <div>
    <section className='cards'>
   <img src={CoffeImageOne} alt="CoffeeImage" className='card-one'/>
   <img src={CoffeImageTwo} alt="CoffeeImage" className='card-two'/>
   <img src={CoffeImageThree} alt="CoffeeImage" className='card-three'/>
   <img src={CoffeImageFour} alt="CoffeeImage" className='card-four'/>
   </section>
   </div>
    )
}