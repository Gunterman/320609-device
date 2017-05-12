var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content .modal-content-close");
var mapLink = document.querySelector(".map-show");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .modal-content-close");
var form = popup.querySelector(".write-us");
var name = popup.querySelector("[name=your-name]");
var email = popup.querySelector("[name=your-email]");
var letter = popup.querySelector("[name=your-letter]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-content-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-map-show");
});

form.addEventListener("submit", function (evt) {
	if (!name.value || !email.value || !letter.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
		console.log("Нужно ввести имя, email и написать письмо");
}
});