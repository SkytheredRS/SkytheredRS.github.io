$(document).ready(function(){

  //generate cat every 1 sec
  setInterval(function(){
    $("#nyancat").toggleClass("moveCat");
  }, 3000);
 
  //click to hide cat
   $("#nyancat").click(function() {
    $("#nyancat").hide();
 
   setTimeout(function() {
     $("#nyancat").show();
                 }, 1000);
     });
 
  //generate lol every 1 sec
  setInterval(function(){
    $("#lol").toggleClass("moveLol");
  }, 3000);
 
  //click to hide & wait 1 sec, show
   $("#lol").click(function() {
    $("#lol").hide();
 
   setTimeout(function() {
     $("#lol").show();
                 }, 1000);
     });
  
});