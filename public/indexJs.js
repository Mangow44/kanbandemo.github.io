window.addEventListener("load", ()=> {
    var stages_title = document.querySelectorAll(".drag-column-header");  
    var stages_column = document.querySelectorAll(".drag-column");

    var colors = ["red-text","orange-text","blue-text","green-text"];
    let i = 0;
    stages_title.forEach(item => {
        item.childNodes[0].setAttribute("class",colors[i]+" row");
        i++;
    })
    stages_column.forEach(item => {
        item.classList.add("purple");
        item.classList.add("darken-4");
    })
});

