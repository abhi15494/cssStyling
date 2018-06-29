cube = document.querySelector(".grand-parent .parent");
let valX = 0;
let valY = 0;

var animate = setInterval(()=>{
    cube.style.transform=`rotateX(${valX}deg) rotateY(${valY}deg)`;
    valX+=5;
    valY+=5;
    // if(valX>=360 || valY >=360){
    //     valX = 0;
    //     valY = 0;
    // }
    console.clear();
    console.log(valX);
    console.log(valY);
}, 50);

console.log(valX);
console.log(valY);
