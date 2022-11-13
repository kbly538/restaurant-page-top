const createNavElement = function (){
    const navElement = document.createElement('nav');
    navElement.id = 'navbar';
    return navElement;
}


const createMenuItemWithId = function(id, textContent){
    
    // TODO: May have to change the button
    const menuItem = document.createElement('button');
    menuItem.id = id;
    menuItem.textContent = textContent? textContent : id;
    menuItem.classList.add('menuItem');

    return menuItem;
}

const styleMenuItems = function(menuItems){
    for (const item of menuItems) {
        item.style.paddingTop = '5px';
        item.style.paddingBottom = '5px';
        item.style.paddingLeft = '50px';
        item.style.paddingRight = '50px';
        item.style.border = 'none';
        item.style.borderRadius = '6px';
    }

}

const styleNav = function(navbar){
    navbar.style.backgroundColor = 'red';
    navbar.style.display = 'flex';
    navbar.style.justifyContent = 'center';
    navbar.style.gap = "20px";
    navbar.style.alignItems = 'center';
    navbar.style.padding = '20px';
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






export default initializeNavBar;