const input = document.getElementById("input");
const button = document.getElementById("submit");
const deleteBtn = document.getElementById("delete");
const deleteBtn1 = document.getElementById("delete1");

const date = new Date();


let list = document.getElementsByTagName("ul")[0];


function displayDate() {
    document.getElementById("demo").innerHTML = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })();
    console.log(Date())
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
submit.addEventListener("click", () => {

    let listItem = document.createElement('li');

    function time() {
        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();
        var ss = date.getSeconds();

        // adding 0 for single digits

        mm = checkTime(mm);
        ss = checkTime(ss);

        listItem.textContent = input.value + " " + "Created at " + hh + ":" + mm + ":" + ss;
    }

    if (input.value == "") {
        alert("Input must be filled out");
        return false;
    }

    time()

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
