//pop up smooth animation for div
document.addEventListener('DOMContentLoaded', function() {
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const sixth = document.querySelector('.sixth');
    const seventh = document.querySelector('.seventh');

    window.addEventListener('scroll', function() {
      const secondTop = second.getBoundingClientRect().top;
      const thirdTop = third.getBoundingClientRect().top;
      const fourthTop = fourth.getBoundingClientRect().top;
      const fifthTop = fifth.getBoundingClientRect().top;
      const sixthTop = sixth.getBoundingClientRect().top;
      const seventhTop = seventh.getBoundingClientRect().top;

      if (secondTop < window.innerHeight * 0.9) {
        second.classList.add('visible');
      } else {
        second.classList.remove('visible');
      }

      if (thirdTop < window.innerHeight * 0.9) {
        third.classList.add('visible');
      } else {
        third.classList.remove('visible');
      }

      if (fourthTop < window.innerHeight * 0.9) {
        fourth.classList.add('visible');
      } else {
        fourth.classList.remove('visible');
       
      }

      if (fifthTop < window.innerHeight * 0.9) {
        fifth.classList.add('visible');
      } else {
        fifth.classList.remove('visible');
      }

      if (sixthTop < window.innerHeight * 0.9) {
        sixth.classList.add('visible');
      } else {
        sixth.classList.remove('visible');
      }

      if (seventhTop < window.innerHeight * 0.9) {
        seventh.classList.add('visible');
      } else {
        seventh.classList.remove('visible');
      }
    

 
    });
  });


  //leaf animation 
  const leafs = document.querySelectorAll('.first .set div');

  for (let i = 0; i < leafs.length; i++) {
    const leaf = leafs[i];
    const randomLeft = Math.floor(Math.random() * 100);
    leaf.style.left = `${randomLeft}%`;
  }
  


  

  
//timeline

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.onload = function() {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 0);
}






  //navbar and music
  const menuuToggle = document.querySelector('.menuToggle');
  const audio = document.getElementById("myAudio");
  audio.volume = 0.1;
  audio.loop = true;

  menuuToggle.addEventListener('click', () => {
    if (menuuToggle.classList.contains('active')) {
      audio.pause();
    } else {
      audio.play();
    }
  });
  

let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('active')
}
