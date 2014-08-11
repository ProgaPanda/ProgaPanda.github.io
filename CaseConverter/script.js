document.addEventListener ('DOMContentLoaded', function() {
var btn = document.getElementById("btn")
    
	btn.addEventListener('click', function() {
		document.getElementById("inp").value  = document.getElementById("inp").value.toUpperCase();		 
 });
}); 
  
document.addEventListener ('DOMContentLoaded', function() {
var btn = document.getElementById("btn1")
        
     btn.addEventListener('click', function() {
        document.getElementById("inp").value = document.getElementById("inp").value.toLowerCase(); 
    
 });
}); 

 
document.addEventListener ('DOMContentLoaded', function() {
var inp= document.getElementById("inp")
        
     inp.addEventListener('click', function() {
         document.getElementById("inp").focus();
    document.getElementById("inp").select();
 });
}); 