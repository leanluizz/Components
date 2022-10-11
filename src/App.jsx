import './styles/App.css';
import './styles/Menu.css';
import './styles/Grid.css';
import "./components/DropDown.jsx";
import DropdDown from './components/DropDown.jsx';
import Grid from './components/Grid.jsx';
import Icon from "./image/icon-menu.png";
import CoffeImageOne from "./image/coffee-info-image.jpg";
import CoffeImageTwo from "./image/coffee-info-image-two.jpg";
import CoffeImageThree from "./image/coffee-info-image-three.jpg";
import CoffeImageFour from "./image/coffee-info-image-four.jpg";
import DoorCoffee from "./image/door-coffee.jpg";
import FoodCoffe from "./image/food-coffee.jpg";
import PeopleCoffe from "./image/people-coffee.jpg";

function App() {
  return (
    <div className="App">
   <nav className='menu'>
    <div className='menu-icon'><img src={Icon} alt="" /></div>
   <DropdDown
   titleOne = "Home"
   titleTwo = "Services"
   titleThree = "Contacts"
   subtitleOne = "homeone"
   subtitleTwo = "hometwo"
   subtitleThree = "serviceone"
   subtitleFour = "servicetwo"
   subtitleFive = "contactone"
   subtitleSix = "contacttwo"
   ></DropdDown>
   </nav>

   <section className='cards'>
   <img src={CoffeImageOne} alt="CoffeeImage" className='card-one'/>
   <img src={CoffeImageTwo} alt="CoffeeImage" className='card-two'/>
   <img src={CoffeImageThree} alt="CoffeeImage" className='card-three'/>
   <img src={CoffeImageFour} alt="CoffeeImage" className='card-four'/>
   </section>

   <Grid>
    <div className='box-1'>
      <p>Lorem ipsum dolor sit amet consectetur
        Lorem ipsum dolor sit amet consect
        Lorem ipsum dolor sit amet consectetur
        Lorem ipsum dolor sit amet consect
      </p>
    <img src={DoorCoffee} alt="boxOne" />
    </div>
    <div className='box-2' id='box-2'></div>
    <div className='box-3' id='box-3'></div>
    <div className='box-4' id='box-4'>
      <img src={FoodCoffe} alt="boxFour" />
      <p>Lorem ipsum dolor sit amet consectetur
        Lorem ipsum dolor sit amet consect
        Lorem ipsum dolor sit amet consectetur
        Lorem ipsum dolor sit amet consect
      </p>
    </div>
    <div className='box-5'>
      <img src={PeopleCoffe} alt="boxFive" />
      <p>Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consect</p>
    </div>
   </Grid>

   <div className='contacts'>Contato</div>
   <footer>Footer</footer>
    </div>
  );
}

export default App;
