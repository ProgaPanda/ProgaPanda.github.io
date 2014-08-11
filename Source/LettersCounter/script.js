document.addEventListener ('DOMContentLoaded', function() {
  var element = document.getElementById("btn");
  var str = document.getElementById('inputSent').value;

 element.addEventListener('click', function() {
 
            var input = document.getElementById("inputSent").value;			
			var elem = document.getElementById("btn");	
			
            var trim = input.replace(/\s+/g, '');
			elem.value = trim.length + " Letters";

			if (elem.value=="1 Letters") {elem.value="1 Letter"};
			if (elem.value=="0 Letters") {elem.value= "No Letters"};		 
			
 });
});  




