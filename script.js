//Dropdown menu here
function myFunction() {

    document.getElementById("myDropdown").classList.toggle("show");
 
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

}

  //comment section here
function commentFunction() {

var x = document.getElementById("inputText").value;
document.getElementById("result").innerHTML = x;
}


  //Alert window here
function alertFunction() {

  alert("Tack! Jag återkomma inom 2 dagar:)");
  window.location.href = "/index.html";
  }

  
  //Showslides here
  var slideIndex = 1;
function runSlides(){  
  showSlides(slideIndex);
}
  

function plusSlides(n) {
  showSlides(slideIndex += n);
 
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
