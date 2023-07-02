const express = require("express"); 
const router  = express.Router(); 




router.get('/about', (req, res) => {
    
   
    res.render('templates/about');
    
});


module.exports = router; 