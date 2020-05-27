
const express = require('express');
const router = express.Router();
const fs = require('fs')




router.get('/test', (req, respond) => {
    fs.writeFile('./data/user.json',JSON.stringify(req.query),(err)=>{
        if(err) throw err;
    })

})

module.exports = router;