function animateImage(event) {
   event.target.addEventListener('mouseover', () => {
         event.target.classList.add('animate__animated', 'animate__heartBeat');
   });
   event.target.addEventListener('mouseleave', () => {
         event.target.classList.remove('animate__animated', 'animate__heartBeat');
   });
}

const animateVideo=(event)=>{
   event.target.addEventListener('mouseover', () => {
      event.target.classList.add('animate__animated', 'animate__headShake');
});
event.target.addEventListener('mouseleave', () => {
      event.target.classList.remove('animate__animated', 'animate__headShake');
});
}


// Animation for images (<img> elements) with random animation from a list
const images = document.getElementsByTagName('img');

// const animations = ['animate__bounce', 'animate__flash', 'animate__rubberBand', 'animate__shakeX', 'animate__tada'];
if (images.length > 0) {
   for (let i = 0; i < images.length; i++) {
      //   let randomAnimation = animations[i % animations.length];
      images[i].addEventListener('mouseover', () => {
            images[i].classList.add('animate__animated', 'animate__pulse');
      });
      images[i].addEventListener('mouseleave', () => {
            images[i].classList.remove('animate__animated', 'animate__pulse');
      });
   }
} else {
   console.error('No <img> elements found.');
}

// Navbar scroll effect (sticky navbar with background color change)
function userScroll() {
   const navbar = document.querySelector('.navbar');
   window.addEventListener('scroll', () => {
       if (window.pageYOffset > 50) {
           navbar.classList.add('bg-dark', 'border-bottom', 'border-secondary', 'navbar-sticky');
       } else {
           navbar.classList.remove('bg-dark', 'border-bottom', 'border-secondary', 'navbar-sticky');
       }
   });
}
userScroll();

// Animation for icons (<i> elements)
const icons = document.getElementsByTagName('i');
if (icons.length > 0) {
    for (let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('mouseover', () => {
            icons[i].classList.add('animate__animated', 'animate__bounce');
        });
        icons[i].addEventListener('mouseleave', () => {
            icons[i].classList.remove('animate__animated', 'animate__bounce');
        });
    }
} else {
    console.error('No <i> elements found.');
}



// Animation for buttons and headings
const buttons=document.getElementsByClassName('btn')
// const buttons = document.getElementsByTagName('button');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
if (buttons.length > 0) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('mouseover', () => {
            buttons[i].classList.add('animate__animated', 'animate__tada');
        });
        buttons[i].addEventListener('mouseleave', () => {
            buttons[i].classList.remove('animate__animated', 'animate__tada');
        });
    }
}
if (headings.length > 0) {
    for (let i = 0; i < headings.length; i++) {
        headings[i].addEventListener('mouseover', () => {
            headings[i].classList.add('animate__animated', 'animate__pulse');
        });
        headings[i].addEventListener('mouseleave', () => {
            headings[i].classList.remove('animate__animated', 'animate__pulse');
        });
    }
} else {
    console.error('No buttons or headings found.');
}