let saturate = document.getElementById('saturate');
let Contrast = document.getElementById('Contrast');
let Brightness = document.getElementById('Brightness');
let Sepia = document.getElementById('Sepia');
let Grayscale = document.getElementById('Grayscale');
let Blur = document.getElementById('Blur');
let huRotate = document.getElementById('hue-Rotate');
let upload = document.getElementById('upload');
let download = document.getElementById('download');
let img = document.getElementById('img');

let reset=document.querySelector('span');
let imgBox =document.querySelector('.img-box');

const canvas=document.getElementById('canvas');
const ctx = canvas.getContext('2d')

function resetValue(){
    ctx.filter='none';
    img.style.filter='none';
    saturate.value='100';
    Contrast.value='100';
    Brightness.value='100';
    Sepia.value='0';
    Grayscale.value='0';
    Blur.value='0';
    huRotate.value='0';
    ctx.drawImage(img,0,0,canvas.width,canvas.height);

}

window.onload = function(){
    download.style.display ='none';
    reset.style.display ='none';
    imgBox.style.display ='none';
}
upload.onchange =function(){
    resetValue();
    download.style.display ='block';
    reset.style.display ='block';
    imgBox.style.display ='block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;

    }

    img.onload=function(){
        canvas.width =img.width;
        canvas.height =img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display="none"
    }
}
let filters = document.querySelectorAll("ul li input");
filters.forEach( filter =>{
    filter.addEventListener('input', function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        Contrast(${Contrast.value}%)
        Brightness(${Brightness.value}%)
        Sepia(${Sepia.value}%)
        Grayscale(${Grayscale.value})
        Blur(${Blur.value}px)
        hue-Rotate(${huRotate.value}deg)
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);

    })
})
download.onclick =function(){
    download.href =canvas.toDataURL();
}