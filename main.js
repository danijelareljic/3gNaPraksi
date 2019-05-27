$(document).ready(function(){
    // Activate Carousel
    $("#slajd").carousel("pause");
  
    // Click on the button to start sliding 
    $("#slajd").hover(function(){
      $("#slajd").carousel("cycle");
      console.log(" radi")
    },
    function(){
      $("#slajd").carousel("pause");
    });
  });