
let YourText; 
 
document.getElementById("submit").onclick = function() {
   YourText = document.getElementById("text").value;
   document.getElementById("duplicateField").textContent = YourText;
   console.log(YourText);
   document.getElementById("text").value = "";
   }






