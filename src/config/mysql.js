const mysql = require('promise-mysql');

async function query(sql) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'scrumbooster_new'
    });
    try {
        const result = await connection.query(sql);
        await connection.end();
        return result;
    } catch (error) {
        console.log('error');
        throw error;
    }
}

module.exports = { query };