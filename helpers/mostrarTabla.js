const fs = require('fs')
require('colors')

const mostrarTabla = async(base, limite, mostrar) => {
    try {
        let consolaTabla = '', dataTabla = ''
    
        for(let i=1; i<=limite; i++){
            consolaTabla += `${String(base).blue} ${'x'.red} ${String(i).blue} ${'='.red} ${String(base*i).blue} \n`
            dataTabla += `${base} x ${i} = ${base*i} \n`
        }

        if(mostrar){
            console.log(`===================`.green)
            console.log(`=== ${'Tabla del'.bgRed} ${String(base).bgRed} ===`.green)
            console.log(`===================`.green)
        
            console.log(consolaTabla)
        }
    
        fs.writeFileSync(`./tablas/tabla-del-${base}.txt`, dataTabla);
    
        return `Archivo tabla-del-${base}.txt creado`.rainbow
    } catch (error) {
        throw new error
    }
}

module.exports = mostrarTabla