const nextIcon =
  '<img class="slider_arrow " src="../ikony/iconmonstr-arrow-25-64.png" alt="right">';
const prevIcon =
  '<img  class="slider_arrow "src="../ikony/iconmonstr-arrow-25-64-left.png" alt="left">';

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [prevIcon, nextIcon],
  dots: false,
  responsive: {
    320: {
      items: 1,
    },
    400: {
      items: 2,
    },
    768: {
      items: 4,
    },
  },
});
