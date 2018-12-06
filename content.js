let wholeArray = [];

var ads = document.getElementsByClassName('ad');
var cads = document.getElementsByClassName('c-ad');
var containers = document.getElementsByClassName('ad-container');
var topBanners = document.getElementsByClassName('top-banner-ad-container');
var adAware = document.getElementsByClassName('ad-awareness-wrapper');
var adWire = document.getElementsByClassName('ad-wireframe-wrapper');
var iframe = document.querySelectorAll('iframe');
var adSlot = document.getElementsByClassName('ad-slot-container');

wholeArray.push(ads, cads, containers, topBanners, adAware, adWire, iframe, adSlot);

for (var i = 0; i < wholeArray.length; i++) {
  changeElement(wholeArray[i]);
}

function changeElement(el) {
  if (el) {
    console.log("FOUND", el.length, "ADVERTISEMENTS");

    for (var i = 0; i < el.length; i++) {
      if ( el[i].addEventListener ) {
        el[i].addEventListener("mouseover", mouseOver);
      }
    }
  }
}

function mouseOver() {
  alert('AAHHH!')
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
