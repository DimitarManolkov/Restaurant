var images = [
    "./images/italian.jpg",
    "./images/japaneese.jpg",
    "./images/indian.jpg",
    "./images/seafood.jpg",
    "./images/american.jpg"
  ];

  var i = 0;
  var time = 4000;

  function changeImg() {
    var img = document.getElementById("slideshow");
    img.src = images[i];

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }

    setTimeout(changeImg, time);
  }

  window.onload = changeImg;