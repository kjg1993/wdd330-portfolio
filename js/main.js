"use stric";

count = 1;
const array = [
	{
		label: `week ${count++}`,
		url: "https://kjg1993.github.io/wdd330-portfolio/index.html",
	},
	{
		label: `week ${count++}`,
		url: "./week02/index_02.html",
	},
	{
		label: `week ${count++}`,
		url: "./week03/index_03.html",
	},
	{
		label: `week ${count++}`,
		url: "./week04/index_04.html",
	},
	{
		label: `week ${count++}`,
		url: "./week05/index_05.html",
	},
	{
		label: `week ${count++}`,
		url: "./week06/index_06.html",
	},
	{
		label: `week ${count++}`,
		url: "./week07/index_07.html",
	},
	{
		label: `week ${count++}`,
		url: "./week08/index_08.html",
	},
	{
		label: `week ${count++}`,
		url: "./week09/index_09.html",
	},
	{
		label: `week ${count++}`,
		url: "./week10/index_10.html",
	},
	{
		label: `week ${count++}`,
		url: "./week11/index_11.html",
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
