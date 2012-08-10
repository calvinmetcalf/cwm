$(function(){
  $("#qrForm").submit(function(){
      var ren;
      if(Modernizr.canvas){
          ren="canvas";
      }else{
       ren= "table";
      }
      var v=$("#qrText").val();
      $("#qr").empty().qrcode({text:v,render:ren,foreground:"#49aa48"});
      if(Modernizr.canvas){
          if(!$("#dlQR").length){
          $("#qrForm").append("<input type='button' value='Download' id='dlQR' />");
          }
          $("#dlQR").click(function(){
          var q= $("canvas", "#qr")[0].toDataURL();
          window.open(q);
          }
          )
      }
     return false;} );
    });