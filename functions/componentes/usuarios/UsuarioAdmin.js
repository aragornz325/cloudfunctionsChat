const { Email } = require('../utilidad/EmailHelper.js')
const { HubSpotHelper } = require('../utilidad/HubSpotHelper.js')
const {
  plantillaEmailBienvenida,
  plantillaEmailDespedida
} = require('../utilidad/PlantillasEmail.js')
const admin = require('firebase-admin')

class UsuarioAdmin {
  registrarEmailsUsuario (nombres, email) {
    console.log('se registra email')
    return admin
      .firestore()
      .collection('emailsusuarios')
      .add({
        nombres: nombres,
        email: email
      })
  }

  enviarEmailBienvenida (nombres, email) {
    const to = email
    const from = 'info@chatpruebaTecnica.com'

    const textHtml = plantillaEmailBienvenida(nombres)

    const objEmail = new Email()

    return objEmail.sendEmail(
      from,
      to,
      '',
      'chat de prueba, bienvenido!',
      textHtml
    )
  }

  enviarEmailDespedida (nombres, email) {
    const to = email
    const from = 'info@chatpruebaTecnica.com'

    const textHtml = plantillaEmailDespedida(nombres)

    const objEmail = new Email()

    return objEmail.sendEmail(
      from,
      to,
      '',
      'Espera, no te vayas!!!!!',
      textHtml
    )
  }

  sincronizarCRM (nombres, apellidos, email) {
    const hubSpot = new HubSpotHelper()
    return hubSpot.crearUsuario(nombres, apellidos, email)
  }
}

exports.UsuarioAdmin = UsuarioAdmin
