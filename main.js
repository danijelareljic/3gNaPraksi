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

   $("#carouselExampleControls").click(function(){
     $("#carouselExampleControls").carousel("next");
   }); 
    $(document).keydown(function(e){
      switch (e.keyCode) {
        case 37:
          $("#carouselExampleControls").carousel("prev");
          break;
      case 39:
          $("#carouselExampleControls").carousel("next");
          break;
        default: return;
          
      }
     e.preventDefault();
   }); 
  
  });