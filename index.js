const input = document.getElementById("input");
const button = document.getElementById("submit");
const deleteBtn = document.getElementById("delete");
const deleteBtn1 = document.getElementById("delete1");

let list = document.getElementsByTagName("ul")[0];

submit.addEventListener("click", () => {
    let listItem = document.createElement('li');

    if (input.value == "") {
        alert("Input must be filled out");
        return false;
    }

    listItem.textContent = input.value;     //new input goes into list
    console.log(listItem);


//new li onclick delete 

    list.appendChild(listItem);
    input = input.value = "";       //clears input box after submit button clicked
    return true
})

deleteBtn.addEventListener("click", () => {
    let lastItem = document.querySelector('li:last-child');
    //let list = document.getElementsByTagName('ul')[0];

    if (list.getElementsByTagName('li').length == 0) {                //if list array = 0, message ' nothing to delete'
        alert("No items to delete")
        return false;
    }
    list.removeChild(lastItem);
    return true;
})

//line delete button

// deleteBtnList.addEventListener("click", () => {
//     let lastItem = document.querySelector('li:last-child');
   

//     if (list.getElementsByTagName('li').length == 0) {                //if list array = 0, message ' nothing to delete'
//         alert("No items to delete")
//         return false;
//     }
//     list.removeChild(lastItem);
//     return true;
// })


list.addEventListener('click', function (ev) {       //greys out and put strike through line in
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);







