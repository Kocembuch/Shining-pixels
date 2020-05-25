const pixels = [...document.querySelectorAll("div")];
const pixelsOdd = [...document.querySelectorAll("div:nth-child(odd)")];



function changePixel() {
    const pixel = Math.floor(Math.random() * pixels.length);
    const pixelOdd = Math.floor(Math.random() * pixelsOdd.length)

    console.log(pixel);
    pixels[pixel].classList.toggle("pixelAnimated");
    pixelsOdd[pixelOdd].classList.toggle("pixelAnimated2");

    setTimeout(() => {
        pixels[pixel].classList.toggle("pixelAnimated");
        pixelsOdd[pixelOdd].classList.toggle("pixelAnimated2");
    }, 1500)

}

setInterval(changePixel, 1000);