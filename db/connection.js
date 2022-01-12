mysql = require(`mysql2`);
// Connects to db
const db = mysql.createConnection(
    {
        host: `localhost`,
        user: `root`,
        password: `01N3psEaGzdExce3BV97kuWg`,
        database: `staffing`
    }
)

// Exports our connection to the db
module.exports = db;