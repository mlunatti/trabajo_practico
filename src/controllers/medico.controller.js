module.exports ={

    listar: async (req,res) => {
        try {
            console.log('ejecutando Medico listar Todos')

            res.json({
                message:'Listado de Medicos'
            })
        } catch (error) {
            console.log(error)
        }
    },

    crear: async (req,res) => {
        try {
            console.log('ejecutando Medico Crear')

            res.json({
                message:'Medico Creado: '+ req.body.medico
            })
        } catch (error) {
            console.log(error)
        }
    },

    listarInfo: async (req,res) => {
        try {
            console.log('ejecutando Medico listarInfo')

            res.json({
                message:'Informacion de Medico: ' +req.params.idMedico
            })
        } catch (error) {
            console.log(error)
        }
    },

}