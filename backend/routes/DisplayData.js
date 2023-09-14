const express = require("express");
const router = express.Router();

router.post('/foodData', (req,res) =>{
    try {
        res.send([global.food_items, global.cateData]);
    } catch (error) {
        console.error(error.message);
        res.send("Serve Error")
    }
})

module.exports = router;