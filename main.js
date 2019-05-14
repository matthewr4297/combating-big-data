var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
};
$(function() {
    
    
    $('#img-1-1').click(function() {
        $(this).fadeTo("slow", .10).delay(750).fadeTo("slow", 1)
    })
    $('#img-1-1').dblclick(function() {
        window.location.href = ("https://twitter.com/iamdylancurran/status/977560765245874176/photo/1");
    })
    $('#img-1-2').click(function() {
        $(this).fadeTo("slow", .10).delay(750).fadeTo("slow", 1)
    })
    $('#img-1-2').dblclick(function() {
        window.location.href = ("https://twitter.com/iamdylancurran/status/977576559543488512/photo/1");
    })
    $('#img-1-3').click(function() {
        $(this).fadeTo("slow", .10).delay(750).fadeTo("slow", 1)
    })
    $('#img-1-3').dblclick(function() {
        window.location.href = ("https://support.google.com/websearch/answer/6030020?hl=en&co=GENIE.Platform%3DAndroid");
    })
    
    $('#landing-1').mouseenter(function() {
        $('#google-logo').fadeTo("slow", 0.8)
    })
    $('#landing-1').mouseleave(function() {
        $('#google-logo').fadeTo("slow", 0)
    })
    $('#landing-2').mouseenter(function() {
        $('#facebook-logo').fadeTo("slow", 0.8)
    })
    $('#landing-2').mouseleave(function() {
        $('#facebook-logo').fadeTo("slow", 0)
    })
  
  $('.nav-item').click(function() {
            $(".collapse navbar-collapse").toggle('collapse');
        });
    
    
    //Nav-bar smooth scrolling
    $("#nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
});
