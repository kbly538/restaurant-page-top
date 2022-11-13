const createContactContent = function(parent){
    parent.replaceChildren();
    parent.appendChild(contactContentWrapper)
}


const createContactContentWrapper = function(){
    
    const wrapper = document.createElement('div');
    wrapper.id = 'contactcontentwrapper';
    
    
    const homeContentTitle = document.createElement('h1');
    homeContentTitle.textContent = "CONTACT";
    homeContentTitle.style.fontSize = '3rem';
    homeContentTitle.style.color = 'White';

    wrapper.appendChild(homeContentTitle)


    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    
    
    return wrapper;
    
}

const contactContentWrapper = createContactContentWrapper();






export default createContactContent;