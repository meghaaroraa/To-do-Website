const list = document.getElementsByClassName("list")[0];
const newReminder = document.getElementById("newReminder");

// Create reminder function (Template card)
function createReminder(id, message){
    
    // Error handling
    if(message && message.length > 45){
        alert("We only support 45 characters");
        return;
    }
    else if(!message){
        alert("Please enter a new task");
        return;
    }

    const li = document.createElement("li");
    li.className = "reminder";
    li.id = id;
    const div = document.createElement("div");
    div.className = "text";
    div.innerText = message;

    // Action container
    const actionContainer = document.createElement("div");
    actionContainer.className = "action";

    // Have the check and delete buttons
    const checkBtn = document.createElement("button");
    checkBtn.className = "btn-check";
    checkBtn.innerText = "Checked";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.innerText = "Delete";

    // Event handler functions
    checkBtn.addEventListener("click", function(){
        if(li.id == id){
            div.style.textDecoration = "line-through";
        }
    })

    deleteBtn.addEventListener("click", function(){
        if(li.id == id){
            list.removeChild(li);
        }
    })

    // Append the button for actions
    actionContainer.append(checkBtn);
    actionContainer.append(deleteBtn);

    // Append all the elements in the list
    li.appendChild(div);
    li.appendChild(actionContainer);

    return li;
}

newReminder.addEventListener("click", function() {
    let message = prompt("Please enter a new task");
    let id = Math.floor(Math.random() * 100);
    let reminder = createReminder(id, message);
    list.appendChild(reminder);
});