const express = require('express');
var router = express.Router();
var db = require("../../DBconnection");

router.post('/getStuInfo', (req, res) => {
    //console.log(req.body);
    const id = req.body.id;
    //console.log(id);
    const sql = "SELECT * FROM student_info WHERE id=" + "'" + id + "'";
    //console.log(sql);
    db.query(sql,function(results){
        //console.log(results);
        res.json(results); 
    })  
});
router.post('/getTeaInfo', (req, res) => {
    //console.log(req.body);
    const id = req.body.id;
    //console.log(id);
    const sql = "SELECT * FROM teacher_info WHERE id=" + "'" + id + "'";
    //console.log(sql);
    db.query(sql,function(results){
        //console.log(results);
        res.json(results); 
    })  
});
module.exports = router;