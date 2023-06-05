var text = localStorage.getItem('name'); // 앞에서 입력받은 텍스트 가져오기
var textOutput = document.getElementById('text-output');
textOutput.textContent = text; // 텍스트 출력

var malText = document.getElementById('mal-text');

var texts = ["그만해!", "아파..", "미안해","살려줘","이제 화풀어","미안..","내가 잘못했다.."];

function getRandomText() {
  var randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

document.addEventListener('click', function() {
  malText.textContent = getRandomText();
});


var container = document.querySelector('.container');
var image = document.querySelector('.image img');
var clickCount = 0;
var delay = 300;

image.addEventListener('mousedown', function() {
  image.style.cursor = "url('./images/ham2.png'), auto";
});

image.addEventListener('mouseup', function() {
  image.style.cursor = "url('./images/ham1.png'), auto";
});

container.addEventListener('click', function() {
  clickCount++;

  if (clickCount === 1) {
    image.src = "./images/ver2.png";
  } 
  else if (clickCount === 6) {
    image.src = "./images/ver3.png";
  } 
  else if (clickCount === 7) {

    var textOutput = document.getElementById('text-output');
    textOutput.remove();

    var reLink = document.createElement('a');
    reLink.href = "hammerStart.html";

    var reImage = document.createElement('img');
    reImage.src = "./images/re.png";
    reImage.alt = "./images/re.img";
    reImage.classList.add("center-image");
    reImage.width = 100;
    reImage.height = 100;

    reLink.appendChild(reImage);
    container.innerHTML = '';
    container.appendChild(reLink);

    document.body.style.backgroundColor = "rgba(242, 219, 174, 0.5)";
  }
  else {
    image.src = "./images/ver4.png";
    setTimeout(function() {
      image.src = "./images/ver2.png";
    }, delay);
  }
});

var homeButton = document.querySelector('.home-btn');

homeButton.addEventListener('mouseover', function() {
  image.style.cursor = "default";
});

homeButton.addEventListener('mouseout', function() {
  image.style.cursor = "url('./images/ham2.png'), auto";
});

homeButton.addEventListener('click', function() {
  window.location.href = 'index.html';
});