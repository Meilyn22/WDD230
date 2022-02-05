//Grab the items from the html 
const input = document.querySelector("input")
const button = document.querySelector("button")
const list = document.querySelector("ul")

//add an eventlistener to listen to clicks on the button
//save the inputs of the user into a variable
//Empty the input after.
//create 3 elements to populate the unordered list
//append the other two elements to the list element
//populate the nearly created elements
//append li to the ul
//listen for the click on the delete
//delete the items and focus the input.
button.addEventListener("click", function(){
    let items = input.value;
    input.value = "";

    let li = document.createElement("li");
    let span =document.createElement("span");
    let bu = document.createElement("button");

    li.appendChild(span);
    li.appendChild(bu);

    span.textContent = items;
    bu.textContent = '❌';

    list.appendChild(li);

    bu.addEventListener('click', function() {
        li.remove()
        

    });
    input.focus();



})