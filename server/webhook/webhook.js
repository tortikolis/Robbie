module.exports = (server, controller) => {
    server.get('/facebook/receive', (req, res, next) => {
        const hubModeIsSubscribe = req.query['hub.mode'] === 'subscribe';
        const verifyTokenValid = req.query['hub.verify_token'] === controller.config.verify_token;
        const challenge = req.query['hub.challenge'];
        if (hubModeIsSubscribe && verifyTokenValid) {
            res.status(200).send(challenge);
        }
        else {
            res.status(403).end();
        }
    });
    server.post('/facebook/receive', (req, res, next) => {
        res.status(200).send('ok');
    });
};
//# sourceMappingURL=webhook.js.map