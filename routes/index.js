var projectsJSON = require('../projects.json');


exports.home = function(req, res) {
    res.render('home');
};

exports.professional = function(req, res) {
    res.render('professional');
};

exports.projects = function(req, res) {
    
    var projects = projectsJSON.projects;
    
    res.render('projects', {
        projects : projects
    });
};
    
exports.project_page = function(req, res) {
    
    var page = req.params.page_number;
    var projects = projectsJSON.projects;
    var project = projects[page - 1];
    
    
    
    res.render('project_page', {
        
        page : page,
        project : project
            
    });

    
};
    
exports.error = function(req, res) {
    
    var projects = projectsJSON.projects;
    
    res.render('error', {
        projects : projects,
        title : "This is not the page you are looking for."
    });
    
};
