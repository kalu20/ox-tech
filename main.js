 const $ = el => document.querySelectorAll(el);
 document.addEventListener("DOMContentLoaded", () => {

     $("#content")[0].style.display = "block";
     $("#loader")[0].remove();

     M.Sidenav.init($(".sidenav"));
     M.Parallax.init($(".parallax"));

 });