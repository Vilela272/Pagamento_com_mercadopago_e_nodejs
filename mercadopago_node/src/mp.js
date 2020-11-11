const mercadopago = require('mercadopago');
const configPayment = require('./config_payment');

if (process.env.NODE_ENV == 'development') {
    mercadopago.configure({
        sandbox: true,
        access_token: configPayment.sandbox.accessToken
    });
} else {
    mercadopago.configure({
        access_token: configPayment.production.accessToken
    });
}
    

module.exports = mercadopago;