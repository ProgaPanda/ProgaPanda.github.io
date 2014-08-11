document.addEventListener ('DOMContentLoaded', function() {
var btn = document.getElementById("btn")

 	btn.addEventListener('click', function() {

    s = document.getElementById("input").value;
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	document.getElementById("btn").value = s.split(' ').length +" Words";
	var elem = document.getElementById("btn");
	if (elem.value == "1 Words") {elem.value ="1 Word"};
 });
}); 
  


	