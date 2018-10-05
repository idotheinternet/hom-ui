const express = require('express'),
			path = require('path'),
			server = express(),
			port = process.env.PORT || 8080;

server.use(express.static('../client'));

server.get('/dashboard', (req, res)=> {
	res.sendFile(path.join(__dirname, '../views/dashboard/dashboard.html'));
});

server.get('/compliance', (req, res)=> {
	res.sendFile(path.join(__dirname, '../views/compliance/compliance.html'));
});

server.get('/reports', (req, res)=> {
	res.sendFile(path.join(__dirname, '../views/reports/reports.html'));
});

server.get('/projects', (req, res)=> {
	res.sendFile(path.join(__dirname, '../views/projects/projects.html'));
});

server.get('/administrator', (req, res)=> {
	res.sendFile(path.join(__dirname, '../views/administrator/administrator.html'));
});

server.listen(port, console.log('SERVER RUNNING ON PORT ' + port));

