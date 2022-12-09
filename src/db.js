const { createPool } = require("mysql2/promise")

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    port: "3306",
    database: "fuchibol"
})

module.exports = pool;