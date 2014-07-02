document.addEventListener("DOMContentLoaded", function(){
	var btnGo = document.getElementById("go");
	btnGo.addEventListener("click", function(){
		TestRunner.runTests([
		  { 
		    test : "login-test", 
		    params : { 
		      resort : "vail" 
		    }
		  }
		]);
	});
}) 