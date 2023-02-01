'use strict';

// Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.

const arrPictures = [
  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS2CbMLExhEJSVW3WRlb6Da9ymrrbf__o6A&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNFipww7NsQBTc2nSMJOOjsEDxHcr2hXheg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lt0pPOuwg_f8g84wG8i65ESpbkeUwJOQoQ&usqp=CAU",
  "https://www.cuteanimalnames.com/wp-content/uploads/2019/09/about-the-worlds-exotic-birds.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdhEXCL51tLDDfItmqErvsds0NnT5Nc9jDw&usqp=CAU",
];

const body = document.querySelector('body');

const divPictures= document.createElement('div');
divPictures.classList.add('conteiner1');

const divOne = document.createElement('div');
divOne.classList.add('conteiner2');

const imageOne = document.createElement('img');
imageOne.classList.add ('big');
divOne.append(imageOne);

for (let key in arrPictures){
  let image = document.createElement('img');
  

   image.setAttribute('src',`${arrPictures[key]}`);
   image.classList.add('small');

   divPictures.append(image);

   image.onclick = () =>{
   
   let a = image.getAttribute('src');
   imageOne.setAttribute('src', `${a}`); 
} 

body.append(divPictures);
body.append(divOne);
    
} 

