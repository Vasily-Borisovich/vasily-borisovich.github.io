const modal = document.getElementById("modal");
const openModal = document.getElementById("modal-open");
const closeModal = document.getElementById("modal-close");
const overlay = document.getElementById("overlay-sheet");


openModal.addEventListener("click", () => {
  modal.style.display="flex";
  overlay.style.display="block";
});

closeModal.addEventListener("click", () => {
  modal.style.display="none";
  overlay.style.display="none";
});

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,

    nextArrow: '<button class="slick-next slick-arrow"><img src="./../img/svg/arrow-next.svg" alt="стрелка вправо"></button>',
    prevArrow: '<button class="slick-prev slick-arrow"><img src="./../img/svg/arrow-prev.svg" alt="стрелка влево"></button>',

    responsive: [
      {
        breakpoint: 1201,
        settings: {
          arrows: false,
        }
      },

      {
        breakpoint: 801,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '150px',
        }
      },

      {
        breakpoint: 701,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '110px',
        }
      },

      {
        breakpoint: 601,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '70px',
        }
      },

      {
        breakpoint: 481,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
    ]
  });
});

// Скрипт для закрытия меню-бургера при переходе на якорные ссылки
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('toggle').checked = false;
  });
});
