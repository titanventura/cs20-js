document.addEventListener("DOMContentLoaded", () => {
	Array.from(document.getElementsByClassName("element")).forEach((el) => {
		el.addEventListener("click", (event) => {
			console.log(event.target);
		});
	});
});
