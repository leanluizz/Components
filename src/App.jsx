import './styles/App.css';
 import './styles/Menu.css';
  import './styles/Grid.css';
   import './styles/Footer.css';
   import DropdDown from './components/DropDown.jsx';
  import Grid from './components/Grid.jsx';
 import Section from "./components/Section.jsx";
import Summary from "./components/Summary.jsx";
 import Contacts from "./components/Contacts.jsx";
  import Footer from "./components/Footer.jsx"
   import Icon from "./image/icon-menu.png";
   import DoorCoffee from "./image/door-coffee.jpg";
  import FoodCoffe from "./image/food-coffee.jpg";
 import PeopleCoffe from "./image/people-coffee.jpg";

function App() {
  const openMenu = () =>{
    const menu = document.querySelector(".menu-cell");
    menu.style.marginLeft = "0px";
  }
  const closeMenu = () =>{
    const menu = document.querySelector(".menu-cell");
    menu.style.marginLeft = "-580px";
  }
 const menuCell = <div className='menu-cell'>
    <ul>
      <div>
    <div className='menu-icon'><img src={Icon} alt="icon-coffee" className='icon'  /></div>
    <button onClick={closeMenu}>X</button>
      </div>
      <li>Home
          <li>HomeOne</li>
          <li>HomeTwo</li>
          <li>HomeThree</li>
      </li>
      <li>Services
          <li>ServicesOne</li>
          <li>ServicesTwo</li>
          <li>ServicesThree</li>
      </li>
      <li>Contacts
          <li>ContactsOne</li>
          <li>ContactsTwo</li>
          <li>ContactsThree</li>
      </li>
    </ul>
   </div>

window.addEventListener("scroll", ()=>{
  const grid = [
    document.querySelector(".box-1"),
    document.querySelector(".box-4") ,
    document.querySelector(".box-5")
  ]
  if (window.pageYOffset >= 750 || window.pageYOffset >= 150) {
    grid[0].style.animation = "Down 2.5s"
  }
  if (window.pageYOffset >= 300 || window.pageYOffset >= 180) {
    grid[1].style.animation = "Down 2.5s"
  }
  if (window.pageYOffset >= 250 || window.pageYOffset >= 200) {
    grid[2].style.animation = "Down 2.5s"
  }
  else{
    grid.map(e => e.style.animation = "none")
  }
}
)
  return (
    <div className="App">
      {menuCell}
   <nav className='menu'>
    <div className='menu-icon'><img src={Icon} alt="icon-coffee" className='icon' onClick={openMenu} /></div>
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

   <Section></Section>

   <Grid grid="auto auto" class="grid">
    <div className='box-1'>
      <h3 id='text-grid'>Aqui você pode relaxar e tomar seu café
        tranquilo em um clima agradavél e aconchegante
        com músicas relaxantes da época dos anos 80's.
      </h3>
    <img src={DoorCoffee} alt="boxOne" />
    </div>
    <div className='box-2' id='box-2'></div>
    <div className='box-3' id='box-3'></div>
    <div className='box-4' id='box-4'>
      <img src={FoodCoffe} alt="boxFour" />
      <h3 id='text-grid'>Cardápio diversificado com bolos,
        doces, chocomilks, capuccinos entre
        outros tipos de bebidas para você!
      </h3>
    </div>
    <div className='box-5'>
      <h3 id='text-grid'>Lugar aconchegante e calmo pra você poder tomar o seu café da manhã tranquilo.</h3>
      <img src={PeopleCoffe} alt="boxFive" />
    </div>
   </Grid>

<Summary></Summary>
<Contacts></Contacts>
<Footer></Footer>

    </div>
  );
}

export default App;
