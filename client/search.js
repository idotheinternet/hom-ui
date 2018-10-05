"use strict";

(function() {
	const elems = document.getElementsByClassName("category"),
				len = elems.length;
	let i = 0;
	for(; i < len; i++) {
		elems[i].onclick = function() {
			if(!this.classList.contains("active")) {
				let i = 0;
				for(; i < len; i++) {
					if(elems[i].classList.contains("active")) {
						elems[i].classList.remove("active");
						break;
					}
				}
				this.classList.add("active");
				searchBar.placeholder = "Search " + this.textContent + "..";
			}
			cogs.classList.remove("active"),
			categories.classList.remove("active")
		}
	}
}());

cogs.onclick = function() {
	!this.classList.contains("active") ? (
		this.classList.add("active"),
		categories.classList.add("active")
	) : (
		this.classList.remove("active"),
		categories.classList.remove("active")
	)
}