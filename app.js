const mostrarTabla = require("./helpers/mostrarTabla")

console.clear()
mostrarTabla("s", 10)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))