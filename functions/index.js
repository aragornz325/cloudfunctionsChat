const functions = require("firebase-functions");
const usuarioController = require('./componentes/usuarios/UsuarioController')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const { logErrors, errorHandler, boomErrorHandler, error404Handler } = require('./middleware/error.handler')
const checkApiKey = require('./middleware/auth.handler')
const app = express();
app.use(cors())

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// app.use(error404Handler)



admin.initializeApp()
admin.firestore().settings({timestampsInSnapshots: true})

app.post('/v1', async (req, res, next) => {
  try {
  res.json({message: 'miraaaaaa vooooo!!!!'})  
  } catch(error) {
    next(error)
  }
})

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.creacionUsuario = functions.auth
.user()
.onCreate(usuarioController.usuarioCreacionController)

exports.elimiarUsuario = functions.auth
.user()
.onDelete(usuarioController.usuarioEliminadoController)

exports.creacionCRMUsuario = functions.auth
.user()
.onCreate(usuarioController.creacionUsuarioCRM)

exports.emviarUsuarios = functions.https.onRequest(app)

