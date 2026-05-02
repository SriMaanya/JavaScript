
let inboxVal = document.getElementById("insert");
let add = document.getElementById("add");
let items = document.getElementById('addItems');

add.addEventListener('click', () => {
    if(inboxVal.value === ""){
        alert("Add a task!");
    }
    else{
        let listItems = document.createElement("li");
        listItems.textContent = inboxVal.value;

        let delBtn = document.createElement("button");
        delBtn.textContent = 'X';

        delBtn.addEventListener("click",() =>{
            listItems.remove();
        });

        listItems.append(delBtn);
        items.append(listItems);
        inboxVal.value = "";
    }
});
