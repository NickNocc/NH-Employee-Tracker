mysql = require(`mysql2`);

const db = mysql.createConnection(
    {
        host: `localhost`,
        user: `root`,
        password: `01N3psEaGzdExce3BV97kuWg`,
        database: `employeeDatabase`
    }
)

const starter = function() {
    const sql = `SOURCE db.sql;`

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        return result;
    })
}
module.exports = db;