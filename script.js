let w, h, c, ctx;

const init = () => {
    c = document.querySelector("canvas");
    w = 1000; // Set width to 1000 pixels
    h = 1000; // Set height to 1000 pixels
    c.width = w;
    c.height = h;
    ctx = c.getContext("2d");
    draw();
    setupEventListeners();
}

const draw = () => {
    let gridSize = 10; // Number of pixels in each grid
    for(let i = 0; i < w; i += gridSize){
        for(let j = 0; j < h; j += gridSize){
            ctx.strokeStyle = "grey"; // Set border color to grey
            ctx.strokeRect(i, j, gridSize, gridSize); // Draw a border rectangle
        }
    }
}

const setupEventListeners = () => {
    let gridSize = 10; // Number of pixels in each grid
    c.addEventListener('click', function(event) {
        let x = event.offsetX;
        let y = event.offsetY;
        let gridX = Math.floor(x / gridSize);
        let gridY = Math.floor(y / gridSize);
        let gridNumber = gridX + gridY * (w / gridSize);
        alert(`Grid Number: ${gridNumber}`);
    });
}

window.onload = init;