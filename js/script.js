var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content .modal-content-close");
	
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-content-show");
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-content-show");
	});
			
var mapLink = document.querySelector(".map-show");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-content-close");
			
	mapLink.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-map-show");
	});
	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-map-show");
	});