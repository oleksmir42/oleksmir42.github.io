
//const a = document.getElementById("mama");


  const rainbow = ["green", "red", "blue", "yellow"];
 /* const imagesArr = [
    "url(./images/0.jpg)",
    "url(./images/1.jpg)",
    "url(./images/2.jpg)",
    "url(./images/3.jpg)",
    "url(./images/4.jpg)",
    "url(./images/5.jpg)",
    "url(./images/6.jpg)",
    "url(./images/7.jpg)",
    "url(./images/8.jpg)",
    "url(./images/9.jpg)",
    "url(./images/10.jpg)",
    "url(./images/11.jpg)",
    "url(./images/12.jpg)",
    "url(./images/13.jpg)",
    "url(./images/14.jpg)",
    "url(./images/15.jpg)",
    "url(./images/16.jpg)",
    "url(./images/17.jpg)",
    "url(./images/18.jpg)",
    "url(./images/19.jpg)",
    "url(./images/20.jpg)",
    "url(./images/21.jpg)",
    "url(./images/22.jpg)",
    "url(./images/23.jpg)",
    "url(./images/24.jpg)",
    "url(./images/25.jpg)",
    "url(./images/26.jpg)",
    "url(./images/27.jpg)",
    "url(./images/28.jpg)",
    "url(./images/29.jpg)",
  ];


*/



    rainbowArr.forEach((n, i) => {
      setTimeout(() => {
        l = imagesArr[i];
        document.getElementById("hat").style.backgroundImage = l;
      }, 2000 * (i + 1));
    });

/*

function arrLoop(arr){
var index = 0;
setInterval(function () {
  if (index === arr.length) {
    index = 0;
  }
  document.getElementById('hat').style.backgroundImage = arr[index];
  index++;
}, 0.3);
}


function arrLoop(arr){
 arr.forEach((item, i) => {
  document.getElementById("hat").style.backgroundImage = arr[i];
  if (arr.length-1 === 1){
arrLoop(arr)
  }
 });
}
arrLoop(imagesArr);



//Need to connect above block to changeBackground so colors changes according to time delay

const bodElement = document.getElementById("mama");
 function changeToFunkyColor(domElement) {
   const r = Math.random() * 255;
   const g = Math.random() * 255;
   const b = Math.random() * 255;

   domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 }
 setInterval(() => {
   changeToFunkyColor(bodElement);
 }, 200);

*/
