const images = document.querySelectorAll('img');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

// we have to count the images in order to manipulate them
let count = 0;


// we can't have more than one image with an active class
// so we have to remove any elements with an active class first
// before we do anything -- this function gets called from
// the event listeners below before incrementing or decrementing the count
function removeActiveClass() {
    images.forEach((image) => {
        if(image.classList.contains('active')) {
            image.classList.remove('active');
        };
    })
}


// the function associated with this event listener first calls
// the removeActive class function, then it inrements the count
rightBtn.addEventListener('click', () => {
    removeActiveClass();
    count++;
    // the count cannot exceed the number of images so we do a check
    if(count > images.length -1) {
        // if it exceeds the number of images, we reset the count to 0
        count = 0;
        images[count].classList.add('active');
        images[count].classList.add('fade-in'); // (adds fade-in effect to images)
        // and in either case, assign the active class to the current image in the count
    } else {
        images[count].classList.add('active');
        images[count].classList.add('fade-in');
    }
})


// this function does the same as the one above, only the opposite
leftBtn.addEventListener('click', () => {
    removeActiveClass();
    count--;
    if(count < 0) {
        count = images.length - 1;
        images[count].classList.add('active');
        images[count].classList.add('fade-in');
    } else {
        images[count].classList.add('active');
        images[count].classList.add('fade-in');
    }
})
