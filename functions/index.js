const functions = require("firebase-functions");
const usuarioController = require('./componentes/usuarios/UsuarioController')
const admin = require('firebase-admin')

admin.initializeApp()
admin.firestore().settings({timestampsInSnapshots: true})

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


