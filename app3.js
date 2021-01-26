function ProductImage(image){
    this.timesClicked = 0;
    this.timesShown = 0;
    this.image = image;

    ProductImage.imageIndex.push(this);
}

ProductImage.imageIndex = [];


new ProductImage('assets/bag.jpg');
new ProductImage('assets/banana.jpg');
new ProductImage('assets/bathroom.jpg');
new ProductImage('assets/boots.jpg');
new ProductImage('assets/breakfast.jpg');
new ProductImage('assets/bubblegum.jpg');
new ProductImage('assets/chair.jpg');
new ProductImage('assets/cthulhu.jpg');
new ProductImage('assets/dog-duck.jpg');
new ProductImage('assets/dragon.jpg');
new ProductImage('assets/pen.jpg');
new ProductImage('assets/pet-sweep.jpg');
new ProductImage('assets/scissors.jpg');
new ProductImage('assets/shark.jpg');
new ProductImage('assets/sweep.png');
new ProductImage('assets/tauntaun.jpg');
new ProductImage('assets/unicorn.jpg');
new ProductImage('assets/usb.gif');
new ProductImage('assets/water-can.jpg');
new ProductImage('assets/wine-glass.jpg');

console.log(ProductImage.imageIndex);


var resultsContainer = document.getElementById('results');


for ( i = 0; i < ProductImage.imageIndex.length; i++){
    var resultsSection = document.createElement('section')
    resultsContainer.appendChild(resultsSection);
    var resultsImg = document.createElement('img');
    resultsImg.src = ProductImage.imageIndex[i].image;
    resultsSection.appendChild(resultsImg);
    var resultsDataBox = document.createElement('div');
    var resultsList = document.createElement('ul');
    var resultsListItem1 = document.createElement('li');
    var resultsListItem2 = document.createElement('li');
    resultsSection.appendChild(resultsDataBox);
    resultsDataBox.appendChild(resultsList);
    resultsList.appendChild(resultsListItem1);
    resultsList.appendChild(resultsListItem2);
    resultsListItem1.textContent = ProductImage.imageIndex[i].timesShown;
    resultsListItem2.textContent = ProductImage.imageIndex[i].timesClicked;
}

