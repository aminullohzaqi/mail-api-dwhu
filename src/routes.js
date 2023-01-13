const { sendMailHandler } = require("./handler")

const routes = [
    {
        method: 'POST',
        path: '/mail',
        handler: sendMailHandler
    }
]

module.exports = routes