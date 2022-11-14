import BeefImage from '../home/pexels-valeria-boltneva-1639561.jpg'

const createHomeContent = function(parent){
    parent.replaceChildren();
    parent.appendChild(homeContentWrapper);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WRAPPER
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const createHomeContentWrapper = function(){
    
    const wrapper = document.createElement('div');
    wrapper.id = 'homecontentwrapper';
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'space-around'
    wrapper.style.gap = '10rem'
    
    
    const heroImg = createHeroImage();
    const heroText = createHeroText();
    

    wrapper.append(heroText);
    wrapper.appendChild(heroImg);

    styleWrapper(wrapper);

    return wrapper;
    
}

const styleWrapper = function(wrapper){
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hero Text
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const createHeroText = function(){
    const heroTextDiv = document.createElement('div');
    heroTextDiv.id = 'hero-text-div'
    heroTextDiv.style.paddingBottom = '100px'

    const heroTextTitle = createHeroTextTitle("Faux à la Carte");
    const heroTextPara = createHeroTextPara("Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");
    const heroBtn = createHeroButton();
    
    heroTextDiv.appendChild(heroTextTitle)
    heroTextDiv.appendChild(heroTextPara);
    heroTextDiv.appendChild(heroBtn);

    return heroTextDiv;
}

const createHeroTextTitle = function(str){
    
    const title = document.createElement('h1');
    title.id = 'hero-text-title'
    title.innerText = str;
    title.style.fontSize = '4rem'
    title.style.color = 'white'
    title.style.marginBottom = '2rem';
    title.style.textDecoration = 'underline 1px'
    title.style.textUnderlineOffset = '20px'

    return title;
}
const createHeroTextPara = function(str){
    const para = document.createElement('p');
    para.id = 'hero-text-para'
    para.innerText = str;
    

    para.style.color = 'white';
    para.style.fontSize = '2rem';
    para.style.lineHeight = '3rem'
    para.style.overflowWrap = 'break-word';


    return para;
}

const createHeroButton = function(){
    const btn = document.createElement('div');
    btn.id = 'hero-btn';
    btn.textContent = 'Discover'

    btn.style.width = '200px';
    btn.style.paddingTop = '10px';
    btn.style.paddingBottom = '10px';
    btn.style.paddingLeft = '30px';
    btn.style.paddingRight = '30px';

    btn.style.textAlign = 'center';
    btn.style.color = 'white';
    btn.style.fontSize = '2rem';
    
    btn.style.backgroundColor = '#365F21';
    btn.style.border = '2px solid #325F18'
    btn.style.borderRadius = '10px'

    btn.style.marginTop = '30px';
    btn.style.marginLeft = '450px';

    btn.addEventListener('click', ()=>{
        document.querySelector('#restaurantmenu').click();
    })

    return btn;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Hero Image
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const createHeroImage = function(){
    const heroImage = document.createElement('img')
    heroImage.id = 'hero-img';
    heroImage.src = BeefImage;

    
    heroImage.style.width = '500px';
    heroImage.style.border = '1px solid white';
    heroImage.style.borderRadius = '20px'    
    heroImage.style.marginBottom = '100px'


    return heroImage;
}




const homeContentWrapper = createHomeContentWrapper();




export default createHomeContent;