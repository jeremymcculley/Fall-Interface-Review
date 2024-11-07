$(window).on("scroll", function(){
   if($(this).scrollTop() > 100){
       $("header").addClass("scrolledHeader");
   }else{
       $("header").removeClass("scrolledHeader");
   }
});
// Slide Right
function slideRight(){
    var reveals = document.querySelectorAll(".slide-right");
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideRight);
// Slide Down
function slideDown(){
    var reveals = document.querySelectorAll(".slide-down");
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideDown);
// Slide Up
function slideUp(){
    var reveals = document.querySelectorAll(".slide-up");
    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideUp);