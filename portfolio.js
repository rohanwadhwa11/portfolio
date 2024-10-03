let sideMenu = document.querySelector(".side-menu");
let frontLine = document.querySelector(".topLine");
let middleLine = document.querySelector(".middleLine");
let lastLine = document.querySelector(".lastLine");
let dropboxNav = document.querySelector(".head-dropbox");

sideMenu.addEventListener("click",() => {
    frontLine.classList.toggle("top-cross");
    middleLine.classList.toggle("bottom-cross");
    for(list of frontLine.classList){
        if(list == "top-cross"){
            lastLine.style.display = "none";
            dropboxNav.style.display = "block";
        }
        else{
        lastLine.style.display = "flex";
        dropboxNav.style.display = "none";
        }
    }
    console.log("hello");
})

let colapse = document.querySelectorAll(".section-block h3");
let downIcon = document.querySelectorAll(".section-block h3 i");
console.log(colapse);
/* console.log(downIcon);
console.log(downIcon[0].parentElement); */
for(let col of colapse){

col.addEventListener("click",function() {
console.log(this);
this.classList.add("colapsed");

for(col of colapse){
    if(col == this)
        continue;
    else{
        if(col.classList == "colapsed"){
            let content = col.nextElementSibling;
            if(content.style.display == "block")
                content.style.display = "none";
        }
        /* console.log(col.classList); */
    }
}

let content = this.nextElementSibling;
if(content.style.display == "block"){
    content.style.display = "none";
}
else{
    content.style.display = "block";
}
    
let downIcon = this.children;
downIcon[0].classList.toggle("fa-caret-down");
/* console.log(downIcon[0].classList); */
})
}
