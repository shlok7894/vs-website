const burgerButton = document.getElementsByClassName("burger")[0];
const navMenu = document.getElementsByClassName("nav-items")[0];
const bar1 = document.getElementsByClassName("bar1")[0];
const bar2 = document.getElementsByClassName("bar2")[0];
const bar3 = document.getElementsByClassName("bar3")[0];
const homeAnimation = this.document.getElementsByClassName("home");

window.addEventListener("load", function () {
  this.document.getElementById("preloader").style.display = "none";
});


//Finally did it but its B.S. lol

burgerButton.addEventListener("click", () => {
    navMenu.classList.toggle('active');

    bar1.classList.toggle('active1');
    bar2.classList.toggle('active2');
    bar3.classList.toggle('active3');
});
function openInNewTab(url) {
  window.open(url, '_blank');
 }

//stop peeking in my code!!!!!

 ScrollReveal().reveal('.features',{ delay: 500 });
 ScrollReveal().reveal('.support-server',{ delay: 500 });
 ScrollReveal().reveal('.why-wait', { delay: 500 });
