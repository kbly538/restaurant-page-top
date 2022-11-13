import { randomIndex } from "../util";
import BeefImage2 from '../home/beef2.jpg'
import BeefImage1 from '../home/beef.jpg'
import BeefImage3 from '../home/beef3.jpg'


let beefArr = [BeefImage1, BeefImage2, BeefImage3];

const loremIpsumTextList = [
    'Mauris bibendum',
    'Cras accumsan velit',
    'Mauris eget',
    'Curabitur iaculis'

]


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
    wrapper.style.gap = '20px';

}


const createMenuCard = function(){
    
    const menuCard = document.createElement('div');
    menuCard.id = 'menu-card-wrapper';
    menuCard.style.display = 'flex';
    menuCard.style.alignItems = 'center';
    menuCard.style.justifyContent = 'left';
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
    dishImage.src = beefArr[randomIndex(beefArr.length)]
    menuCardImage.appendChild(dishImage);


    const menuCardText = document.createElement('div');
    menuCardText.style.display = 'flex';
    menuCardText.style.flexDirection = 'column'
    menuCardText.style.justifyContent = 'space-between'
    menuCardText.style.height = '150px'
    menuCardText.style.width = '150px'
    menuCardText.style.overflow = 'wrap'
    menuCardText.style.gap = '20px';
    menuCardText.style.fontSize = '1.5rem';
    menuCardText.style.paddingRight = '10px';
    
    const menuCardHeading = document.createElement('h2');
    menuCardHeading.textContent = loremIpsumTextList[randomIndex(loremIpsumTextList.length)]
    
    const menuCardPrice = document.createElement('p');
    menuCardPrice.textContent = `$ ${Math.floor(Math.random() * 100) + 50}.00` 
    menuCardPrice.style.paddingRight = '10px';
    


    menuCardText.style.color = 'white';

    menuCardText.appendChild(menuCardHeading);
    menuCardText.appendChild(menuCardPrice);


    menuCard.appendChild(menuCardImage);
    menuCard.appendChild(menuCardText);

    

    return menuCard;

}




const restaurantMenuContentWrapper = createRestaurantMenuContentWrapper();





export default createRestaurantMenuContent;