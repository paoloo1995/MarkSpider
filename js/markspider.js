var btn = document.getElementById("search");
var text = document.getElementById("content");
var res = document.getElementById("result");
var main = document.getElementById("main");

btn.addEventListener("click",function(){
	var keyWord = text.value;
	btn.value = "Searching...";
	main.style.display = "block";
	res.innerHTML = "<p> Wait... </p>";
	chrome.extension.sendRequest({key: keyWord}, function(response) {
/*	  console.log(response);*/
	  res.innerHTML = "";
	  for (var i=0; i < response.length; i++ ) {
/*	  	console.log("res:",response);
*/	  	var next = "<a target='blank' href=" + response[i].url + " >" + response[i].title + "</a>";
	  	res.innerHTML += next;
	  };
	  
	  btn.value = "Search";
	});
})

