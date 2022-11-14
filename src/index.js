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
createContactContent(contentDiv)



contactBtn.addEventListener('click', function(){
    createContactContent(contentDiv);  
})

homeBtn.addEventListener('click', function(){
    createHomeContent(contentDiv);  
    
})

restaurantMenuButton.addEventListener('click', function(){
    createRestaurantMenuContent(contentDiv);  
  
})



// <a href="https://www.freepik.com/free-photo/restaurant-interior_1243339.htm#query=restaurant&position=1&from_view=search&track=sph">Image by evening_tao</a> on Freepik
// meat: <a href="https://www.freepik.com/free-photo/grilled-beef-steak-dark-wooden-surface_14454672.htm#query=meat%20food&position=6&from_view=search&track=sph">Image by jcomp</a> on Freepik
