$(document).ready(function(){

  //create score variable
  var score = 0;
  
  //generate cat every 1 sec
  setInterval(function(){
    $("#nyancat").toggleClass("moveCat");
  }, 3000);
 
  //click to hide cat
   $("#nyancat").click(function() {
    $("#nyancat").hide();
 
     //add one to score
     score += 20;
     
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
 
    //add one to score
     score += 10;
     
   setTimeout(function() {
     $("#lol").show();
                 }, 1000);
     });

  //check score every half second
  setInterval(function(){
    $("#score").html(score);
  }, 500);
  
  setTimeout(function(){ 
    window.location.href="file:///Users/ddays/GitHub/SkytheredRS.github.io/codepen_PNmaEa/index.html"; 
  }, 1000);

});