// Creates content wrapper
const createContentDiv = function (){
    
    const contentDiv = document.createElement('div');
    contentDiv.id = 'content';
    return contentDiv;
}


// Attaches content wrapper to the body
const initializeContentDiv = function(){
    // TODO: Should I pass the doc as a param?
    const content = createContentDiv();
    document.body.appendChild(content);
   return content;
};



export default initializeContentDiv;