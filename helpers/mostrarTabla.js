const fs = require('fs')

const mostrarTabla = async(base, limite) => {
    try {
        let consolaTabla = '', dataTabla = ''
    
        for(let i=1; i<=limite; i++){
            consolaTabla += `${base} x ${i} = ${base*i} \n`
            dataTabla += `${base} x ${i} = ${base*i} \n`
        }
    
        console.log(`===================`)
        console.log(`=== Tabla del ${base} ===`)
        console.log(`===================`)
    
        console.log(consolaTabla)
    
        fs.writeFileSync(`./tablas/tabla-del-${base}.txt`, dataTabla);
    
        return `Archivo tabla-del-${base}.txt creado`
    } catch (error) {
        throw new error
    }
}

module.exports = mostrarTabla