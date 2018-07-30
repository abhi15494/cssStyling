cube = document.querySelector(".grand-parent .parent");
let valX = 0;
let valY = 0;

setInterval(()=>{
    cube.style.transform=`rotateX(${valX}deg) rotateY(${valY}deg)`;
    valX+=5;
    valY+=5;
    // if(valX>=360 || valY >=360){
    //     valX = 0;
    //     valY = 0;
    // }
}, 50);