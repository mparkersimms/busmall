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

function renderImages() {
  var currentlyRenderedImages = [leftImage.name, centerImage.name, rightImage.name];
  var newImages = generateRandomImage();
  while (
    currentlyRenderedImages[0] === newImages[0].name ||
    currentlyRenderedImages[1] === newImages[0].name ||
    currentlyRenderedImages[2] === newImages[0].name ||
    currentlyRenderedImages[0] === newImages[1].name ||
    currentlyRenderedImages[1] === newImages[1].name ||
    currentlyRenderedImages[2] === newImages[1].name ||
    currentlyRenderedImages[0] === newImages[2].name ||
    currentlyRenderedImages[1] === newImages[2].name ||
    currentlyRenderedImages[2] === newImages[2].name

  ){
    newImages = generateRandomImage();
  }

  leftImage.src = newImages[0].image;
  leftImage.name = newImages[0].name;
  newImages[0].timesShown++;

  centerImage.src = newImages[1].image;
  leftImage.name = newImages[1].name;
  newImages[1].timesShown++;

  rightImage.src = newImages[2].image;
  leftImage.name = newImages[2].name;
  newImages[2].timesShown++;
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
var totalOfTimesClicked = [];
var totalOfTimesShown = [];
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

    resultsList.textContent = productNames[i] + ' had ' + ProductImage.imageIndex[i].timesClicked + ' votes, and was seen ' + ProductImage.imageIndex[i].timesShown + ' times.';

  }

  for (var j = 0; j < ProductImage.imageIndex.length; j++){
    totalOfTimesClicked.push(ProductImage.imageIndex[j].timesClicked);
  }
  for (var k = 0; k < ProductImage.imageIndex.length; k++){
    totalOfTimesShown.push(ProductImage.imageIndex[k].timesShown);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Times Clicked',
        data: totalOfTimesClicked,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      },{
        label: 'Times Shown',
        data: totalOfTimesShown,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    
    ]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
  });
});



console.log(totalOfTimesClicked);
