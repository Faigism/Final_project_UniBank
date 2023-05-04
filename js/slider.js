$('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          autoplay: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 200,
        settings: {
          infinite: false,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  