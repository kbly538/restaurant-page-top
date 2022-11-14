import map from '../contact/bordeaux.png'



const createContactContent = function(parent){
    parent.replaceChildren();
    parent.appendChild(contactContentWrapper)
}


const createContactContentWrapper = function(){
    
    const wrapper = document.createElement('div');
    wrapper.id = 'contactcontentwrapper';
    styleWrapper(wrapper);

    wrapper.appendChild(createContactInfoDiv());
    wrapper.appendChild(createMapImage());
    return wrapper;
    
}

const styleWrapper = function(wrapper){
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'center';
    wrapper.style.gap = '30px';
    wrapper.style.border = '1px solid white'
    wrapper.style.marginTop = '10px'

}


const createContactInfoDiv = function(){
    const div = document.createElement('div');
    
    const phonePara = document.createElement('p');
    const phone = "+1231232344556"
    phonePara.textContent = phone;
    phonePara.style.marginBottom = '20px'

    const addressPara = document.createElement('p');
    const address = "Imaginary avenue NO:23 Bordeaux Cedex FRANCE"
    addressPara.textContent = address;

    div.appendChild(phonePara);
    div.appendChild(addressPara);
    
    styleContactInfo(div);

    return div;
}


const styleContactInfo = function(elem){

    elem.style.color = 'white';
    elem.style.fontSize = '2rem';
    elem.style.width = '600px';
    
}


const createMapImage = function(){

    const mapDiv = document.createElement('div');
    const gMap = new Image();
    gMap.src = map;
    gMap.style.width = '600px';
    gMap.style.borderRadius = '3px';

    mapDiv.appendChild(gMap);

    return mapDiv;
}






const contactContentWrapper = createContactContentWrapper();
export default createContactContent;