module.exports.chat = function(application, req, res) {
    res.render('chat');
}

module.exports.startChat = function(application, req, res) {
    var formData = req.body;

    req.assert('apelido', 'Apelido is required').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        res.render('index', { errors: errors });
        return;
    }

    application.get('io').emit('msgToClient', {
        apelido: formData.apelido,
        msg: 'has join'
    });

    res.render('chat', { apelido: formData.apelido });
}