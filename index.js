const main = require('./utils/prompts');
const mysql = require(`mysql2`);
const { db, starter } = require(`./db/connection`);

starter();
main();