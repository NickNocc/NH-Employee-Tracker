mysql = require(`mysql2`);

const db = mysql.createConnection(
    {
        host: `localhost`,
        user: `root`,
        password: `01N3psEaGzdExce3BV97kuWg`,
        database: `employeeDatabase`
    }
)

module.exports = db;