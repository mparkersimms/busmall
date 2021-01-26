function ProductImage(image){
  this.timesClicked = 0;
  this.timesShown = 0;
  this.image = image;

  ProductImage.imageIndex.push(this);
}

ProductImage.imageIndex = [];
var productNames = [];

new ProductImage('assets/bag.jpg');
productNames.push('bag');
new ProductImage('assets/banana.jpg');
productNames.push('banana');
new ProductImage('assets/bathroom.jpg');
productNames.push('bathroom');
new ProductImage('assets/boots.jpg');
productNames.push('boots');
new ProductImage('assets/breakfast.jpg');
productNames.push('breakfast');
new ProductImage('assets/bubblegum.jpg');
productNames.push('bubblegum');
new ProductImage('assets/chair.jpg');
productNames.push('chair');
new ProductImage('assets/cthulhu.jpg');
productNames.push('cthulhu');
new ProductImage('assets/dog-duck.jpg');
productNames.push('dog-duck');
new ProductImage('assets/dragon.jpg');
productNames.push('dragon');
new ProductImage('assets/pen.jpg');
productNames.push('pen');
new ProductImage('assets/pet-sweep.jpg');
productNames.push('pet-sweep');
new ProductImage('assets/scissors.jpg');
productNames.push('scissors');
new ProductImage('assets/shark.jpg');
productNames.push('shark');
new ProductImage('assets/sweep.png');
productNames.push('sweep');
new ProductImage('assets/tauntaun.jpg');
productNames.push('tauntaun');
new ProductImage('assets/unicorn.jpg');
productNames.push('unicorn');
new ProductImage('assets/usb.gif');
productNames.push('usb');
new ProductImage('assets/water-can.jpg');
productNames.push('water-can');
new ProductImage('assets/wine-glass.jpg');
productNames.push('wine-glass');

console.log(ProductImage.imageIndex);

var imageContainer = document.getElementById('image-container');
var leftImage = document.getElementById('left-image');
var centerImage = document.getElementById('center-image');
var rightImage = document.getElementById('right-image');








function generateRandomImage(){
  var leftRandomImage = Math.floor(Math.random() * ProductImage.imageIndex.length);
  var centerRandomImage = Math.floor(Math.random() * ProductImage.imageIndex.length);
  var rightRandomImage = Math.floor(Math.random() * ProductImage.imageIndex.length);

  while (leftRandomImage === centerRandomImage ){
    leftRandomImage = Math.floor(Math.random() * ProductImage.imageIndex.length);
  }
  while (leftRandomImage === rightRandomImage){
    leftRandomImage = Math.floor(Math.random() * ProductImage.imageIndex.length);
  }
  while (centerRandomImage === rightRandomImage){
    rightRandomImage = Math.floor(Math.random() * ProductImage.imageIndex.length);
  }

  var leftProductImage = ProductImage.imageIndex[leftRandomImage];
  var centerProductImage = ProductImage.imageIndex[centerRandomImage];
  var rightProductImage = ProductImage.imageIndex[rightRandomImage];

  return [leftProductImage, centerProductImage, rightProductImage];
}

function renderImages(leftProductImage, centerProductImage, rightProductImage) {
  leftImage.src = leftProductImage.image;
  leftProductImage.timesShown++;

  centerImage.src = centerProductImage.image;
  centerProductImage.timesShown++;

  rightImage.src = rightProductImage.image;
  rightProductImage.timesShown++;
}

var randomProducts = generateRandomImage();
renderImages(randomProducts[0],randomProducts[1],randomProducts[2]);

var numberOfRounds = 25;
var numberOfClicks = 0 ;
var buttonShows = document.getElementById('button');
var h2Element = document.getElementById('h2');
var h2ResultsElement = document.getElementById('h2results');

imageContainer.addEventListener('click', function (event){
  console.log(event.target);
  for (var i=0; i < ProductImage.imageIndex.length; i++){
    if(event.target.src.includes(ProductImage.imageIndex[i].image)){
      ProductImage.imageIndex[i].timesClicked++;
      numberOfClicks++;
      console.log(ProductImage.imageIndex[i]);
      console.log(numberOfClicks);
    }}
  if (numberOfClicks < numberOfRounds) {
    var randomProducts = generateRandomImage();
    renderImages(randomProducts[0],randomProducts[1],randomProducts[2]);
  }else{
    console.log('total has reached 25');
    imageContainer.style.display='none';
    // location.href = 'results.html';
    h2Element.style.display='none';
    buttonShows.style.display='inline-block';
    return buttonShows;

  }});

var resultsContainer = document.getElementById('results');
buttonShows.addEventListener('click', function (event){
  console.log(event.target);
  buttonShows.style.display='none';
  h2ResultsElement.style.display='block';

  for ( var i = 0; i < ProductImage.imageIndex.length; i++){
    var resultsSection = document.createElement('section');
    resultsContainer.appendChild(resultsSection);
    var resultsImg = document.createElement('img');
    resultsImg.src = ProductImage.imageIndex[i].image;
    resultsSection.appendChild(resultsImg);
    var resultsDataBox = document.createElement('div');
    var resultsList = document.createElement('p');
    resultsSection.appendChild(resultsDataBox);
    resultsDataBox.appendChild(resultsList);

    resultsList.textContent = productNames[i] + ' had ' + ProductImage.imageIndex[i].timesClicked + ' votes, and was seen " + ProductImage.imageIndex[i].timesShown + " times.';

  }

});
