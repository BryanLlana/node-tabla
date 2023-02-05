const yargs = require("./config/yargs")
const mostrarTabla = require("./helpers/mostrarTabla")

console.clear()
mostrarTabla(yargs.b, yargs.l, yargs.m)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))