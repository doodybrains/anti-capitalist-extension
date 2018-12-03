var ads = document.getElementsByClassName('ad');
var cads = document.getElementsByClassName('c-ad');

for (var i = 0; i < ads.length; i++) {
  changeElement(ads[i]);
}

for (var i = 0; i < cads.length; i++) {
  changeElement(cads[i]);
}

function changeElement(el) {
  console.log(el);
  el.addEventListener("mouseover", mouseOver);
}

function mouseOver() {
  sendPost();
}

function sendPost(dat) {
  $.ajax({
    url: "http://localhost:8080/posts",
    type: "POST",
    data: JSON.stringify({
      "data": "We can bring to birth a new world from the ashes of the old ",
    }),
    error: function(e) {
      console.log(e);
    },
    dataType: "json",
    cache: false, 
    contentType: "application/json; charset=utf-8"
  });
}
