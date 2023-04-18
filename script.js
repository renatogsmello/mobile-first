const addButton = document.getElementById("addButton")
const cameraButton = document.getElementById("cameraButton")
const pinButton = document.getElementById("pinButton")
const background = document.getElementById("background")

addButton.addEventListener("click", () => {
	cameraButton.classList.toggle("-translate-y-16")
	pinButton.classList.toggle("-translate-y-32")
	pinButton.firstElementChild.classList.toggle("opacity-0")
	cameraButton.firstElementChild.classList.toggle("opacity-0")
	background.classList.toggle("hidden")
})
