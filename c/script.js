$(function(){
$("#cc").submit(function(){
  var cs=$("textarea:first");
  var js=CoffeeScript.compile(cs.val());
  cs.remove();
  $("#cc").prepend("<textarea name='js_code'>"+js+"</textarea>")
  
}
    
    )
});