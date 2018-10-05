"use strict";
(function() {
	const elems = document.getElementsByClassName("tab"),
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
				getView('/' + this.id);
			}
		}
	}
}());