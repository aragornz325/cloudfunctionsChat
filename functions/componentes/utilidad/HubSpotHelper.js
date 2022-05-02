const requestAPI = require('request')
const functions = require('firebase-functions')

//const claveapihubspot = functions.config().configuration.claveapihubspot

class HubSpotHelper {
  crearUsuario (nombres, apellidos, email) {
    return requestAPI.post(
      {
        headers: {
          'content-type': 'application/json'
        },
        url: `https://api.hubapi.com/contacts/v1/contact/?hapikey=59419aa7-9fad-4dff-a7d9-82ff92070dc0`,
        body: JSON.stringify({
          properties: [
            {
              property: 'email',
              value: email
            },
            {
              property: 'firstname',
              value: nombres
            },
            {
              property: 'lastname',
              value: apellidos
            }
          ]
        })
      },
      (error, response, body) => {
        if (error) {
          return console.error(error)
        }
        return console.log(JSON.parse(body))
      }
    )
  }
}

exports.HubSpotHelper = HubSpotHelper
