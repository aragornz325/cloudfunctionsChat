const boom = require('@hapi/boom');
//const { config } = require('../config/config')
const jwt = require("jsonwebtoken")

function checkApiKey(req, res, next){
    const apiKey = req.headers['api'];
    if (apiKey === 123456789) {
        next();
    }else {
        next(boom.unauthorized('se necesita API KEY'))
    }
}

function chequearAdminRole(req, res, next) {
const user = req.user;
if(user.rol === 'administrador'){
    next()
} else {
    next(boom.unauthorized('necesitas permiso de administrador'))
}
}





module.exports = {checkApiKey, chequearAdminRole}