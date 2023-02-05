const yargs = require('yargs')
                .option('b', {
                    alias: 'base',
                    describe: 'Define la base de la tabla de multiplicacion',
                    demandOption: true,
                    type: 'number'
                })
                .option('m', {
                    alias: 'mostrar',
                    describe: 'Autoriza si se quiere mostrar la tabla en la consola',
                    default: false,
                    type: 'boolean'
                })
                .option('l', {
                    alias: 'limite',
                    describe: 'Define el limite de la tabla de multiplicacion',
                    default: 10,
                    demandOption: true,
                    type: 'number'
                })
                .check((argv, alias) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }

                    return true
                })
                .argv

module.exports = yargs