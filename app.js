var express = require('express');
var path = require('path');
var routes = require('./routes');

var app = express();

var port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// routes
app.get('/', routes.home);

app.get('/professional', routes.professional);

app.get('/projects', routes.projects);

app.get('/project_page/:page_number?', routes.project_page);

app.get('*', routes.error);


app.listen(port, function() {
    console.log("Server started on port: " + port + ".......");
})