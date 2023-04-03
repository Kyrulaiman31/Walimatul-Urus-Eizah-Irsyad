document.addEventListener('DOMContentLoaded', function() {
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');

    window.addEventListener('scroll', function() {
      const secondTop = second.getBoundingClientRect().top;
      const thirdTop = third.getBoundingClientRect().top;
      const fourthTop = fourth.getBoundingClientRect().top;

      if (secondTop < window.innerHeight * 0.8) {
        second.classList.add('visible');
      } else {
        second.classList.remove('visible');
      }

      if (thirdTop < window.innerHeight * 0.8) {
        third.classList.add('visible');
      } else {
        third.classList.remove('visible');
      }

      if (fourthTop < window.innerHeight * 0.8) {
        fourth.classList.add('visible');
      } else {
        fourth.classList.remove('visible');
      }
    });
  });