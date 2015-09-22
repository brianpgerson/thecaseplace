
function Controller(view, model){
	this.view = view;
	this.model = model;
}

Controller.prototype.bindEventListeners = function() {
	document.getElementById("titleCase").addEventListener("click", this.titleCase.bind(this), false);
	document.getElementById("upperCase").addEventListener("click", this.upperCase.bind(this), false);
	document.getElementById("lowerCase").addEventListener("click", this.lowerCase.bind(this), false);
	document.getElementById("copy").addEventListener("click", this.copy.bind(this), false);
}



Controller.prototype.titleCase = function(){
	var string = this.view.getString();
	var results = [];
	var split = string.toLowerCase().split(" ");
	results.push(split[0].split("")[0].toUpperCase() + split[0].slice(1));
	for (i = 1; i < split.length; i++){
		if (split[i] == "") {

		}
		else if (this.model.prepositions.indexOf(split[i]) < 0) {
			results.push(split[i].split("")[0].toUpperCase() + split[i].slice(1));
		} else {
			results.push(split[i]);

		}
	}
	this.view.updateString(results.join(" "));
}

Controller.prototype.lowerCase = function(){
	var string = this.view.getString();
	this.view.updateString(string[0].toUpperCase() + string.slice(1).toLowerCase());
}

Controller.prototype.upperCase = function(){
	var string = this.view.getString();
	this.view.updateString(string.toUpperCase());
}



Controller.prototype.copy = function(){
	var stringArea = this.view.getStringArea();
  	stringArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
}
