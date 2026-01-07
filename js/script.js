
// ReplaceMe functionality (ensure the class "replace-me" exists on the page)
const checkReplace = document.querySelector('.replace-me');
if (checkReplace !== null) {
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed: 2000,
        separator: ',',
        loopCount: 'infinite',
        auto: true
    });
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
userScroll(); // Call the function to apply the scroll behavior

// Video modal functionality (ensure video modal and button exist)
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector('#video');

if (videoBtn !== null && videoModal !== null && video !== null) {
    videoBtn.addEventListener('click', () => {
        video.src="images/introduction.mp4";
        videoModal.style.display = 'block'; 
        video.play(); 
    });

    // const closeBtn = videoModal.querySelector('.close'); 
    // closeBtn.addEventListener('click', () => {
    //     videoModal.style.display = 'none';
    //     video.pause(); 
    // });
    videoModal.addEventListener('hidden.bs.modal', function (event) {
        console.log('Event Triggered')
         video.src = ''; 
      });
} else {
    console.error('Video button or modal not found.');
}
