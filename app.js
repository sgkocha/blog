let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".nav");

mobileMenu.addEventListener("click", function(){
   mobileMenu.classList.toggle("active-menu");
   mainMenu.classList.toggle("active-menu");
   /*if (mobileMenu.contains("active-menu")) {
     mainMenu.classList.add("active-menu");
   } else {
     mainMenu.classList.remove("active-menu");
   }*/
});
