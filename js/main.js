"use stric";

count = 1;
const array = [
	{
		label: `week 0${count++}`,
		url: "https://kjg1993.github.io/wdd330-portfolio/index.html",
	},
	{
		label: `week 0${count++}`,
		url: "./week02/index_02.html",
	},
	{
		label: `week 0${count++}`,
		url: "./week03/index_03.html",
	},
];

function table() {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		const list = document.querySelector(".list");
		let item = document.createElement("li");
		let anchor = document.createElement("a");
		anchor.textContent = element.label;
		anchor.setAttribute("href", element.url);
		anchor.setAttribute("target", "_blank");

		item.appendChild(anchor);
		list.appendChild(item);
	}
}

table();
