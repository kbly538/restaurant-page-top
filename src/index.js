import './style.css';
import './cssreset.css';
import initializeContentDiv from './contentLoader';
import initializeNavBar from './navBar';
import createContactContent from './contact/contactPage';
import createRestaurantMenuContent from './restaurant_menu/restaurantMenuPage';
import createHomeContent from './home/homePage';

initializeNavBar();
const contentDiv = initializeContentDiv();


const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', function(){
    createContactContent(contentDiv);  
  
})


const homeBtn = document.getElementById('homepage');
homeBtn.addEventListener('click', function(){
    createHomeContent(contentDiv);  
  
})


const restaurantMenuButton = document.getElementById('restaurantmenu');
restaurantMenuButton.addEventListener('click', function(){
    createRestaurantMenuContent(contentDiv);  
  
})