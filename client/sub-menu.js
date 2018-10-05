"use strict";
subToggle.onclick = function() {
	!this.classList.contains("active") ? ( 
		this.classList.add("active"),
		subMenu.classList.add("active")
	) : (
		this.classList.remove("active"),
		subMenu.classList.remove("active")
	);
}