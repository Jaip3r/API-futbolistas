const pool = require("../db")


const createPlayer = async (req, res) =>{

    const {nombre, equipo, posicion, dorsal} = req.body;

    try{

        const [rows] = await pool.query("INSERT INTO jugadores (nombre, equipo, posicion, dorsal) VALUES (?,?,?,?)",[nombre, equipo, posicion, dorsal])
        res.send({
            id: rows.insertId,
            nombre,
            equipo,
            posicion,
            dorsal
        });

    }catch(error){

        return res.status(500).json({
            message: "Something went wrong"
        })

    }

}

const getPlayers = async (req,res) =>{

    try{

        const[rows] = await pool.query('SELECT * FROM jugadores');
        res.json(rows);

    }catch(error){
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

};

const getOnePlayer = async(req,res) => {

    try{

        const[rows] = await pool.query('SELECT * FROM jugadores WHERE id = ?', [req.params.id]);

        if(rows.length <= 0 ) return res.status(404).json({
            message: 'Player not found'
        })

        res.json(rows[0]);

    }catch(error){
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

};

const updatePlayer = async(req,res) => {

    const {id} = req.params;
    const {nombre, equipo, posicion, dorsal} = req.body;

    try{

        const [result] = await pool.query('UPDATE jugadores SET nombre = IFNULL(?, nombre), equipo = IFNULL(?, equipo), posicion = IFNULL(?, posicion), dorsal = IFNULL(?, dorsal)', [nombre, equipo, posicion, dorsal]);

        if(result.affectedRows === 0) return res.status(404).json({
            message: "Player not found"
        });

        const [rows] = await pool.query('SELECT * FROM jugadores WHERE id = ?', [id]);

        res.json(rows[0]);

    } catch (error){

        return res.status(500).json({
            message: "Something went wrong"
        });

    } 

};

const  deletePlayer = async (req, res) => {

    try{

        const [result] = await pool.query('DELETE FROM jugadores WHERE id = ?', [req.params.id]);

        if(result.affectedRows <= 0){

            return res.status(404).json({
                message: 'Player NOT found'
            });

        }

        res.sendStatus(204);

    } catch (error){
        return res.status(500).json({
            message: "Something went wrong"
        });
    }

};

module.exports = {
    getPlayers,
    getOnePlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
}




