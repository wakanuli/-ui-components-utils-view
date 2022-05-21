// console.log("el", el);

(function run(el) {
	const dom = document.createElement("div");
	dom.style.width = "100px";
	dom.style.height = "100px";
	dom.style.background = "#ccc";
	// dom.appendChild
	el.appendChild(dom);
})(document.querySelector("body div"));
