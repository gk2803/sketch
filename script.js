
const wrapper = document.querySelector('.wrapper');
const dimensions ="700px";
//slider const
var slider = document.getElementById('sliderInput');
let output = document.querySelector('#sliderLabel');
output.innerHTML = 12;

function clearElements(){
  const gridArray = Array.from(wrapper.childNodes);
  console.log(wrapper);
  console.log(gridArray);
  //for each element in an Array of divs , delete the all the child divs.
  //too slow when it comes to big grids (have to delete each cell one by one)
  gridArray.forEach((element=>wrapper.removeChild(element)));

}

function create(num){
  wrapper.style.setProperty("--grid-rows",num);
  wrapper.style.setProperty("--grid-cols",num);

  for (d = 0;d<(num*num);d++){
    let cell = document.createElement('cell');
    cell.style.width=`${dimensions/num}px`;
    cell.style.height=`${dimensions/num}px`;
    wrapper.appendChild(cell).className = 'grid-item';
  }
  var pixels = wrapper.querySelectorAll('cell');
  pixels.forEach(pixel=> pixel.addEventListener('mouseover',randomColor));
}

function pixelSize(){
  clearElements();
  create(slider.value);
  output.innerHTML =slider.value;
}

function rand(){
  return Math.floor(Math.random()*255);
}
function randomColor(){
  this.style.backgroundColor = "black";
}

function main(){
  create(12,12);

}

main();

//event listeners
slider.addEventListener('mouseup',pixelSize);
