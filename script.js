function upEvent() {
    const element = this.parentElement.previousElementSibling;
    if (element) {
        this.parentElement.after(element);
    }
}

function downEvent() {
    const element = this.parentElement.nextElementSibling;
    if (element) {
        this.parentElement.before(element);
    }
}

function deleteEvent() {
    this.parentElement.remove();
}


function add() {
    let newElement = document.createElement('div');
    newElement.className = 'data';
    newElement.innerHTML = `
        <input id='first' type='text'>
        <input id='second' type='text'>
    `;

    const up_button = document.createElement('button');
    up_button.innerHTML = '↑';
    up_button.addEventListener('click', upEvent);
    
    const down_button = document.createElement('button');
    down_button.innerHTML = '↓';
    down_button.addEventListener('click', downEvent);
    
    const delete_button = document.createElement('button');
    delete_button.innerHTML = 'x';
    delete_button.addEventListener('click', deleteEvent);
    
    newElement.appendChild(up_button);
    newElement.appendChild(down_button);
    newElement.appendChild(delete_button);
    
    const data = document.getElementById("data");
    data.appendChild(newElement);
}

function save() {
    const data = document.getElementById("data").children;
    let saveData = {};
    for (let child of data) {
        console.log(child.children[0]);
        const first = child.children[0].value;
        const second = child.children[1].value;
        saveData[first] = second;
    }
    document.getElementById("saves").innerHTML = JSON.stringify(saveData);
}