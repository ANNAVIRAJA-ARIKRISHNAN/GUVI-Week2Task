var request= new XMLHttpRequest()

request.onreadystatechange=function(){
	if(request.readyState==4 && request.status=='200'){
		console.log("Response : "+request.responseText);
		document.getElementsByTagName("p")[0].innerHTML=request.responseText;
	}
}
document.getElementsByTagName("h1")[0].innerHTML='https://restcountries.eu/rest/v2/all'
request.open('GET','https://restcountries.eu/rest/v2/all', true)
request.send()
