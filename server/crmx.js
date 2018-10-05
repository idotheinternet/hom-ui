const express = require('express'),
			path = require('path'),
			server = express();

const crmx = {
	use(str) {
		return server.use(express.static(str));
	},
	initViews(folder, views) {
		let i = 0,
				view;
		const len = views.length;
		for(; i < len; i++) {
			view = views[i];
			server.get(views[i], (req, res)=> {
				res.sendFile(path.join(__dirname, folder + view, view.substring(1, view.length) + ".html"));
			});
		}
		this.default = function(view) {
			server.get('/', (req, res)=> {
				res.sendFile(path.join(__dirname, folder + view, view.substring(1, view.length) + ".html"));
			});
		}
		return this;
	},
	fire(port) {
		return server.listen(port, console.log('SERVER RUNNING ON PORT: ' + port));
	}
}

module.exports = crmx;