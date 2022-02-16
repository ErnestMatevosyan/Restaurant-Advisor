const express = require('express');
const router = express.Router();
const pool =  require('../config/db.js');

router.get('/rests', async (req, res) => {
    pool.getConnection( (err, conn) => {
        if (err) throw err;

        try {
            const qry ='select * from rests';
            conn.query(qry, (err, result) => {
                conn.release();
                if (err) throw err;
                res.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log(err);
            res.end();
        }
    });
});
pool.query('select * from rests', (err, res) =>{
    res.sort((a,b) =>(a.Rating - b.Rating))
    console.log(res)
})



module.exports = router;