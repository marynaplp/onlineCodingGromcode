//document.querySelector
//input:selector// domString contains css selector
//output: first elements of this// HTML element


//document.querySelectorAll
//input: domString = string thaat contains css selector
//output: nodeList - pseudo array
const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(btn => {
    btn.addEventListener('click', handleBtnClick);

});

function handleBtnClick(event) {
    //console.log(this)
    console.log(event.target.innerText)
}