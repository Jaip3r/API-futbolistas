const pool = require("../db")


const createPlayer = async (req, res) =>{

    const {nombre, equipo, posicion, dorsal} = req.body;

    try{

    }catch(error){
        return res.status(500).json(
        {
            message: "Something went wrong"
        }
        )
    }

}