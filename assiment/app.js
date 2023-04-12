// Sidle show
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  
  
  setTimeout(function() {
    plusSlides(1);
  }, 5000);
}

// menu cuộn 



//Check Email
var form = document.querySelector('#formEmail');
eInput = form.querySelector(".input");
text = form.querySelector(".text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('submit');
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  form.classList.add("error");
  form.classList.remove("valid");
  if (eInput.value == "") {
    text.innerHTML = "Email can't be blank";
  } else if (!eInput.value.match(pattern)) {
    text.innerText = "Please enter valid email";
  } else {
    form.classList.replace("error", "valid")
    text.innerText = "This is a valid email";
  }
});
// Back top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#backtop').fadeIn();
    } else {
      $('#backtop').fadeOut();
    }
  })
  $('#backtop').click(function () {
    $('html ,body').animate({
      scrollTop: 0
    }, 1000)
  })
})


