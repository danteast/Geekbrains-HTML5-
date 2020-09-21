
var video = document.querySelector("#myvideo"),
    button = document.querySelector("button");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".main-presentation-block-btn").click(function() {
  $(".main-presentation-block-btn").addClass('main-presentation-block-btn--hide');
})