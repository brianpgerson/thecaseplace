window.addEventListener('load', init);

function init(){
	var view = new View;
	var model = new Prepositions;
	var controller = new Controller(view, model);
	controller.bindEventListeners();
}