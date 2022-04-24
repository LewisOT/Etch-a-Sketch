let gridBox = document.querySelector(".grid-container")
let bts = document.querySelectorAll("input[name=toGrid]")
var counter = 0;



// helper function to decide the grid system
function chooser(event) {
    switch (this.value)
    {
        case 'bySixteen':
            sixteen();
            this.removeEventListener("click", chooser)
            break;
        case 'byFifty':
            fifty();
            this.removeEventListener("click", chooser)
            break;
        case 'byHundred':
            hundred();
            this.removeEventListener("click", chooser)
            break;
    }
    counter++
    autoReset(counter)
}

//delete children grid of divs
function deleteChild() {
    let divChildren = document.querySelector(".grid-container");
    
    //e.firstElementChild can be used.
    let divChild = divChildren.lastElementChild; 
    while (divChild) {
        divChildren.removeChild(divChild);
        divChild = divChildren.lastElementChild;
    }
}


// Add an event listener to each grid buttons
for (let i = 0; i < 3; i++) {
    bts[i].addEventListener("click", chooser)
}

function autoReset() {
    if (counter == 3) {
        for (let i = 0; i < 3; i++) {
            bts[i].addEventListener("click", chooser)
        }
        counter = 0;
        
    }
}






// for 16 x 16 value="bySixteen"
function sixteen(event) {
    deleteChild()
for (let i = 0; i < 256; i++) {
    let tinyBox = document.createElement("div")
    gridBox.append(tinyBox)
    tinyBox.classList.add('boxes')
    tinyBox.style.width = "6.25%"
    tinyBox.style.height = "6.25%"
    tinyBox.addEventListener("mouseenter", function(event){
    tinyBox.style.backgroundColor = "black"
    })
}
}

// for 50x50 value="byFifty"
function fifty(event) {
    deleteChild()

for (let i = 0; i < 2500; i++) {
    let tinyBox = document.createElement("div")
    gridBox.append(tinyBox)
    tinyBox.classList.add('boxes')
    tinyBox.style.width = "2%"
    tinyBox.style.height = "2%"
    tinyBox.addEventListener("mouseenter", function(event){
    tinyBox.style.backgroundColor = "black"
    })
}
}

// for 100x100 value="byHundred"
function hundred(event) {
    deleteChild()

for (let i = 0; i < 10000; i++) {
    let tinyBox = document.createElement("div")
    gridBox.append(tinyBox)
    tinyBox.classList.add('boxes')
    tinyBox.style.width = "1%"
    tinyBox.style.height = "1%"
    tinyBox.addEventListener("mouseenter", function(event){
    tinyBox.style.backgroundColor = "black"
    })
}
}
//width: 6.25%; height: 6.25%;

