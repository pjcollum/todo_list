const input = document.getElementById("input");
const button = document.getElementById("submit");
const deleteBtn = document.getElementById("delete");
const deleteBtn1 = document.getElementById("delete1");

const date = new Date();

let list = document.getElementsByTagName("ul")[0];

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// function time() {
// }


submit.addEventListener("click", () => {
    let listItem = document.createElement('li');

    if (input.value == "") {
        alert("Input must be filled out");
        return false;
    }

    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    listItem.textContent = input.value + " " + "Created at " + hh + ":" + mm + ":" + ss;


    /*
    2 text nodes

    append first li

    create span w/ class

    append textnode2 to new span

    appenmd span to listitem
    */


    // adding 0 for single digits
    mm = checkTime(mm);
    ss = checkTime(ss);

    // // Create a "close" button and append it to each list item
    // var myNodelist = document.getElementsByTagName("li");

   
        var span = document.createElement("SPAN");
        var txt = document.createTextNode(" \u00D7");
        span.className = "close";
        span.appendChild(txt);
        listItem.appendChild(span);
    

    // Click on a close button to hide the current list item
    // var close = document.getElementsByClassName("close");
    // var i;
    // for (let i = 0; i < close.length; i++) {
    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
        // }
        }

    console.log(listItem);

    list.appendChild(listItem);
    input = input.value = "";       //clears input box after submit button clicked
    return true
})


deleteBtn.addEventListener("click", () => {
    let lastItem = document.querySelector('li:last-child');

    if (list.getElementsByTagName('li').length == 0) {                //if list array = 0, message ' nothing to delete'
        alert("No items to delete")
        return false;
    }
    list.removeChild(lastItem);
    return true;
})

list.addEventListener('click', function (ev) {       //greys out and put strike through line in
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
