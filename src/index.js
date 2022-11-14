import './style.css';
import './cssreset.css';
import './navbar/navBar'
import initializeContentDiv from './contentLoader';
import createContactContent from './contact/contactPage';
import createRestaurantMenuContent from './restaurant_menu/restaurantMenuPage';
import createHomeContent from './home/homePage';



const contactBtn = document.getElementById('contact');
const homeBtn = document.getElementById('homepage');
const restaurantMenuButton = document.getElementById('restaurantmenu');

const contentDiv = initializeContentDiv();
createHomeContent(contentDiv)



contactBtn.addEventListener('click', function(){
    createContactContent(contentDiv);  
})

homeBtn.addEventListener('click', function(){
    createHomeContent(contentDiv);  
    
})

restaurantMenuButton.addEventListener('click', function(){
    createRestaurantMenuContent(contentDiv);  
  
})
