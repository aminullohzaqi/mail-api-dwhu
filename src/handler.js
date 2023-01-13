const { sendMessage } = require('./Service/ProducerService')
const ProducerService = require('./Service/ProducerService')

async function sendMailHandler (request, h) {
    const { title, body, adminmail } = request.payload

    try {
        if (title != null && body != null && adminmail != null && title != undefined && body != undefined && adminmail != undefined){
            const message = {
                title: title,
                body: body,
                adminmail: adminmail
            }
    
            await sendMessage('sendMail:DWHU', JSON.stringify(message))
    
            const response = h.response({
                status: 'success',
                message: 'Permintaan Dalam Antrean'
            })
    
            response.code(201)
            return response

        } else {
            const response = h.response({
                status: 'error',
                message: 'Title, Body, and Admin Email must be defined'
            })
    
            response.code(400)
            return response
        }

    } catch (error) {
        const response = h.response({
            status: 'error',
            message: error,
        });

        response.code(500);
        console.error(error);
        return response;
    }
}

module.exports = { sendMailHandler }