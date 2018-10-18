const express = require('express');
const bodyParser = require('body-parser');
const webhook = require('./webhook/webhook');
module.exports = (controller) => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.listen(process.env.PORT || 3000, () => {
        console.log(`server is running at port ${process.env.PORT || 3000}`);
    });
    webhook(server, controller);
    controller.webserver = server;
    return server;
};
//# sourceMappingURL=server.js.map