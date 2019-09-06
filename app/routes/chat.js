module.exports = function(application) {
    application.get('/chat', function(req, res) {
        application.controllers.chatController.chat(application, req, res);
    });

    application.post('/chat', function(req, res) {
        application.controllers.chatController.startChat(application, req, res);
    });
}