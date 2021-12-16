const express = require('express');
const router = express.Router()




router
.route('/asdasd')
    .get((req, res) => {
        res.json({"msg": "User Route GET Hit "})
    })
    .post((req, res) => {
        res.json({"msg": "User Route POST Hit"})
    })


module.exports = router