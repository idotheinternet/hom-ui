function getView(url) {
	const req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.send();
	req.onreadystatechange = function() {
		if(this.readyState === 4 && this.status === 200) view.innerHTML = this.response;
	}
}
getView('/dashboard');