module.exports = function(application) {
    application.get('/chat', function(req, res) {
        res.render('chat');
    });

    application.get('/post', function(req, res) {
        res.render('chat');
    });
}