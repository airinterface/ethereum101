function createDiv(name: string) : HTMLElement {
    const div = document.createElement("DIV");
    div.innerHTML = name;
    return div;
}
// 1. Create node that has message World... 
const returnedNode = createDiv("World...");
// append returned node to body
document.body.appendChild(returnedNode)
returnedNode.addEventListener('mouseenter', ()=>{
    returnedNode.classList.add('active')
})
returnedNode.addEventListener('mouseleave', ()=>{
    returnedNode.classList.remove('active')
})
