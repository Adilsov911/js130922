
function Show() {
    var value = parseInt(document.getElementById("faz").value);
    var y = value;
    var value = parseInt(document.getElementById("mdt").value);
    var z = value;
    var count = 0;
    var text = document.getElementById("msg")

   if (y*=z) {
      
       alert(`${y}`)
       
   }
  
   function btn2() {
       var e= 0;
        for (b = 11; b<15;b++) {
            e=e+b;

            text.innerHTML=b;
            
        }
       
    
   }
}