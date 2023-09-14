

const scrollUpBtn = document.querySelector(".scroll-up-btn");

window.addEventListener("scroll", checkHeight)

function checkHeight(){
    if(window.scrollY > 100) {
        scrollUpBtn.style.display = "block"
    } else {
        scrollUpBtn.style.display = "none"
    }
}

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// var scroll = window.pageYOffset;
// var scrollup = document.querySelector('.scroll-up-btn');
// console.log(scrollup);

// // BACK TO TOP
// scrollup.addEventListener('click', function() {
//     scrollup.style.scrollBehavior = "smooth";
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });

// });

// window.addEventListener('scroll', function() {
//   var scroll = window.pageYOffset;

//   if (scroll >= 200) {
//     scrollup.style.display = 'block';
//   } else {
//     scrollup.style.display = 'none';
//   }
// });

