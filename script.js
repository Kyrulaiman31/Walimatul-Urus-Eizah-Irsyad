//pop up smooth animation for div
document.addEventListener('DOMContentLoaded', function() {
    const second = document.querySelector('.second');
    const third = document.querySelector('.third');
    const fourth = document.querySelector('.fourth');
    const fifth = document.querySelector('.fifth');
    const sixth = document.querySelector('.sixth');

    window.addEventListener('scroll', function() {
      const secondTop = second.getBoundingClientRect().top;
      const thirdTop = third.getBoundingClientRect().top;
      const fourthTop = fourth.getBoundingClientRect().top;
      const fifthTop = fifth.getBoundingClientRect().top;
      const sixthTop = sixth.getBoundingClientRect().top;

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

      if (fifthTop < window.innerHeight * 0.8) {
        fifth.classList.add('visible');
      } else {
        fifth.classList.remove('visible');
      }

      if (sixthTop < window.innerHeight * 0.8) {
        sixth.classList.add('visible');
      } else {
        sixth.classList.remove('visible');
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
  



  //background song
  const audio = new Audio("bgmusic.mp3");
  audio.autoplay = true;
  
  let isMuted = false;
  
  const toggleMute = () => {
    isMuted = !isMuted;
    const icon = document.querySelector('#mute ion-icon');
    if (isMuted) {
      icon.setAttribute('name', 'play-circle-outline'); 
      audio.volume = 0;
    } else {
      icon.setAttribute('name', 'volume-mute-outline'); 
      audio.volume = 0.6;
    }
  }
  
  const restartSong = () => {
    audio.currentTime = 0;
    audio.play();
  }
  
  audio.addEventListener('ended', restartSong);
  
  const muteButton = document.getElementById("mute");
  muteButton.addEventListener("click", () => {
    audio.play();
    toggleMute();
  });
  
  // Add this code to start playing the audio when the user scrolls the page
  let hasStartedScrolling = false;
  window.addEventListener('scroll', () => {
    if (!hasStartedScrolling) {
      hasStartedScrolling = true;
      audio.play();
    }
  });
  
//timeline

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.onload = function() {
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 0);
}
