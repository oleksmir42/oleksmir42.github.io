



  const rainbow = ["green", "red", "blue", "yellow"];
function arrLoop(arr){
var index = 0;
setInterval(function () {
  if (index === arr.length) {
    index = 0;
  }
  document.getElementById("mama").style.backgroundColor = arr[index];
  index++;
}, 0.5);
}
arrLoop(rainbow);
