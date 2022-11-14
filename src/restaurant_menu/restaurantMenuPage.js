import { randomIndex } from "../util";

import mealImage4 from '../restaurant_menu/asparagus-g369d79a85_640.jpg'
import mealImage5 from '../restaurant_menu/beans-g97971ac3d_640.jpg'
import mealImage6 from '../restaurant_menu/food-g0ebbb356d_640.jpg'
import mealImage7 from '../restaurant_menu/hamburger-g07b7cd14f_640.jpg'
import { mainIngredientList, spiceIngredientList, vegeIngredientList } from "../util";
import { LoremIpsumSeeder } from "../util";


const loremIpsumTextList = LoremIpsumSeeder()


let mealArr = [mealImage4, mealImage5, mealImage6, mealImage7];


const createRestaurantMenuContent = function(parent){
    parent.replaceChildren();   
    
    const title = document.createElement('h1');
    title.innerText = "MENU";
    title.style.fontSize = '3rem';
    title.style.color = 'white';
    title.style.margin = '30px';
    title.style.textAlign = 'center'
    
    const seperator = document.createElement('div');
    seperator.style.border = '1px solid white';
    


    parent.appendChild(title);
    parent.appendChild(seperator);
    parent.appendChild(restaurantMenuContentWrapper);
}

const createRestaurantMenuContentWrapper = function(){
    
    const wrapper = document.createElement('div');
    wrapper.id = 'restaurentmenucontentwrapper';


    
    

    for (let i = 0; i < 20; i++){
        wrapper.appendChild(createMenuCard());
    }

    const aCard = createMenuCard();
    



    styleRestaurantMenuContentWrapper(wrapper)
    
    return wrapper;
    
}

const styleRestaurantMenuContentWrapper = function(wrapper){
    
    wrapper.style.display = 'grid';
    wrapper.style.gridTemplateColumns = '1fr 1fr 1fr'
    wrapper.style.padding = '50px';
    wrapper.style.justifyItems = 'center';

    wrapper.style.gap = '20px';

}


const createMenuCard = function(){
    
    const menuCard = document.createElement('div');
    menuCard.id = 'menu-card-wrapper';
    menuCard.style.display = 'flex';
    menuCard.style.alignItems = 'center';
    menuCard.style.justifyContent = 'space-between';
    menuCard.style.gap = '30px'
    menuCard.style.width = '400px';
    menuCard.style.height = '200px';
    menuCard.style.border = '1px solid white'
    menuCard.style.borderRadius = '5px'
    menuCard.style.backgroundColor = 'black'
    menuCard.style.paddingLeft = '10px';

    const menuCardImage = document.createElement('div');
    const dishImage = new Image();
    dishImage.style.borderRadius = '5px'
    dishImage.style.height = '150px';
    dishImage.style.width = '200px';
    dishImage.src = mealArr[randomIndex(mealArr.length)]
    menuCardImage.appendChild(dishImage);


    const menuCardText = document.createElement('div');
    menuCardText.style.display = 'flex';
    menuCardText.style.flexDirection = 'column'
    menuCardText.style.justifyContent = 'space-around'
    menuCardText.style.height = '150px'
    menuCardText.style.width = '150px'
    menuCardText.style.overflow = 'wrap'
    menuCardText.style.gap = '20px';
    menuCardText.style.fontSize = '1.5rem';
    menuCardText.style.paddingRight = '10px';
    
    const menuCardHeading = document.createElement('h2');
    menuCardHeading.textContent = loremIpsumTextList[3]

    
    const menuCardIngredients = document.createElement('p');
    menuCardIngredients.textContent = `${mainIngredientList[randomIndex(mainIngredientList.length)]}, 
                                       ${vegeIngredientList[randomIndex(vegeIngredientList.length)]},
                                       ${spiceIngredientList[randomIndex(spiceIngredientList.length)]}`;
    menuCardIngredients.style.fontSize = '1rem'
    
    const menuCardPrice = document.createElement('p');
    menuCardPrice.textContent = `$ ${Math.floor(Math.random() * 100) + 50}.00` 
    menuCardPrice.style.paddingRight = '10px';
    


    menuCardText.style.color = 'white';

    menuCardText.appendChild(menuCardHeading);
    menuCardText.appendChild(menuCardIngredients);
    menuCardText.appendChild(menuCardPrice);


    menuCard.appendChild(menuCardImage);
    menuCard.appendChild(menuCardText);

    

    return menuCard;

}




const restaurantMenuContentWrapper = createRestaurantMenuContentWrapper();





export default createRestaurantMenuContent;