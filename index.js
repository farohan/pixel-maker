const image = document.getElementById('image');
const button = document.getElementById('clicker');

function createImage() {
    const numOfPixels = 2500;
    image.innerHTML = '';

    for (let i = 1; i <= numOfPixels; i++) {
        const r = Math.floor(Math.random() * 255) + 1;
        const g = Math.floor(Math.random() * 255) + 1;
        const b = Math.floor(Math.random() * 255) + 1;
        const determinedColor = `rgba(${r}, ${g}, ${b}, 1)`;

        const pixel = document.createElement('div');
        pixel.style.height = `${Math.sqrt(250000 / numOfPixels)}px`;
        pixel.style.width = `${Math.sqrt(250000 / numOfPixels)}px`;
        pixel.style.background = determinedColor;
        image.appendChild(pixel);
    }
}
