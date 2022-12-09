const pool = require("../db")


const createPlayer = async (req, res) =>{

    const {nombre, equipo, posicion, dorsal} = req.body;

    try{
        const [rows] = await pool.query("INSERT INTO jugadores (nombre, equipo, posicion, dorsal) VALUES (?,?,?)",[nombre, equipo, posicion, dorsal])
        res.send({
            id: rows.insertId,
            nombre,
            equipo,
            posicion,
            dorsal
        });
    }catch(error){
        return res.status(500).json(
        {
            message: "Something went wrong"
        }
        )
    }

}