document.addEventListener('DOMContentLoaded', (event) => {
    const init = () => {
        const canvas = document.querySelector("canvas");
        const width = 1000;
        const height = 1000;
        const gridSize = 10;
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");

        drawGrid(context, width, height, gridSize);
        setupEventListeners(canvas, width, gridSize);
    };

    const drawGrid = (context, width, height, gridSize) => {
        context.strokeStyle = "grey"; // Set border color to grey
        for (let i = 0; i < width; i += gridSize) {
            for (let j = 0; j < height; j += gridSize) {
                context.strokeRect(i, j, gridSize, gridSize); // Draw a border rectangle
            }
        }
    };

    const setupEventListeners = (canvas, width, gridSize) => {
        canvas.addEventListener('click', (event) => {
            const x = event.offsetX;
            const y = event.offsetY;
            const gridX = Math.floor(x / gridSize);
            const gridY = Math.floor(y / gridSize);
            const gridNumber = gridX + gridY * (width / gridSize);
            openLink(gridNumber);
        });
    };

    const openLink = (gridNumber) => {
        const baseUrl = "https://example.com/grid/"; // Base URL to which grid number will be appended
        const url = `${baseUrl}${gridNumber}`;
        window.location.href = url;
    };

    init();
});
