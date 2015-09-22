function View(){}

View.prototype.getString = function(){
	return document.getElementById("mainInput").value;
}

View.prototype.updateString = function(string){
	document.getElementById("mainInput").value = string;
}

View.prototype.getStringArea = function(){
	return document.getElementById("mainInput");
}