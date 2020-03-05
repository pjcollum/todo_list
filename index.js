const input = document.getElementById("input");
const button = document.getElementById("submit");
const deleteBtn = document.getElementById("delete");

let list = document.getElementsByTagName("ul")[0];

submit.addEventListener("click", () =>{
    let listItem = document.createElement('li');
    listItem.textContent = input.value;
    console.log(listItem);
 
    list.appendChild(listItem);
    input.value = '';

})

deleteBtn.addEventListener("click", () =>{
    let lastItem = document.querySelector('li:last-child');
    //let list = document.getElementsByTagName('ul')[0];

    list.removeChild(lastItem);
})


list.addEventListener('click', function(ev) {       //greys out and put line through
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);







