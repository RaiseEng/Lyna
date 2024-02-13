document.getElementById("nobtn").onclick = function(){

    var yesBtn = document.getElementById("yesbtn");
    var currentWidth = yesBtn.offsetWidth;
    var newWidth = currentWidth + 30; 
    yesBtn.style.width = newWidth + "px";

   var currentHeight = yesBtn.offsetHeight
   var newHeight = currentHeight+10;
   yesBtn.style.height = newHeight + "px";

   document.getElementsByTagName("img")[0].src = "no.png"
   document.getElementById('text').innerHTML = "YOU BETTER SAY YES!!"


  }

  document.getElementById("yesbtn").onclick = function(){
        document.getElementsByTagName("img")[0].src = "Love.png"
        document.getElementById('text').innerHTML = "I <span>Love</span> You Lyna"
  }