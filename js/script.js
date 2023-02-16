var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(document).ready(function () {
    $(window).bind('scroll', function () {
        var gap = 50;
        if ($(window).scrollTop() > gap) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });
});


$('#clickButton').click(function () {
  var url = $('input[name=link]:checked').data('href');
  //Goto url
  window.location.href = url;
});

// js for 'toTop' button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})