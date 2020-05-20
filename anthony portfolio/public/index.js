// var h1 = document.getElementById("anthony_serrato");
// h1.style.color = "red";
$(".nav-link").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});