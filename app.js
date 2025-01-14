
import 'dotenv/config';
import pg from 'pg';
import express from "express";
const app = express();
const port = 3000;
const { Pool } = pg;


const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'localhost',
    database: 'postgres',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    idleTimeoutMillis: 300
});

await pool.connect();

app.set('view engine', 'ejs');


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
const result = await pool.query('select * from tablica1');
console.log(result.rows);

app.get('/', (req, res) => {
    return res.render('index')
  });

