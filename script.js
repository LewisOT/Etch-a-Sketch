gridBox = document.querySelector(".grid-container")
// for 16 x 16
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
//width: 6.25%; height: 6.25%;

