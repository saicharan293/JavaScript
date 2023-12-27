window.addEventListener("mousemove", function (det) {
  var rect = document.querySelector("#center");
  var mouse = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    det.clientX
  );
  gsap.to(rect, {
    left: mouse,
    ease: Power4,
  });
});
