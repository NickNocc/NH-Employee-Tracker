const main = require('./utils/prompts');
const mysql = require(`mysql2`);
const db = require(`./db/connection`);

const sql = `SOURCE ./db/db.sql;`

db.query(sql, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    return result;
})

main();