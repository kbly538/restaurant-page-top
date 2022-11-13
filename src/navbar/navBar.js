const createNavElement = function (){
    const navElement = document.createElement('nav');
    navElement.id = 'navbar';
    return navElement;
}


const createMenuItemWithId = function(id, textContent){
    
    const menuItem = document.createElement('div');
    menuItem.id = id;
    menuItem.textContent = textContent? textContent : id;
    menuItem.classList.add('menuItem');
    

    return menuItem;
}

const styleMenuItems = function(menuItems){
    for (const item of menuItems) {
        
        item.style.paddingTop = '5px';
        item.style.paddingBottom = '5px';
        item.style.paddingLeft = '30px';
        item.style.paddingRight = '30px';
        
        item.style.border = 'none';
        item.style.borderRadius = '6px';

        item.style.color = 'white';
        item.style.fontSize = '2rem'

        item.style.cursor = 'pointer'

    }

}

const styleNav = function(navbar){
    navbar.style.backgroundColor = 'rgba(0,0,0, 0.8)';
    navbar.style.opacity = '80%';

    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'right';
    navbar.style.gap = "10px";
    navbar.style.alignItems = 'center';
    navbar.style.padding = '20px';
    navbar.style.paddingRight = '100px';


} 


const initializeNavBar = function(){
    
    const navbar = createNavElement();
    styleNav(navbar);

    const home = createMenuItemWithId('homepage', 'Home')
    const menu = createMenuItemWithId('restaurantmenu', 'Menu')
    const contact = createMenuItemWithId('contact', 'Contact')
    styleMenuItems([home, menu, contact]);


    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    document.body.appendChild(navbar);
}


initializeNavBar();
