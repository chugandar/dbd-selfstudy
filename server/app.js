const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const Db = require('./db');
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

//create
app.post('/login',(req,res) => {
    try {
        console.log(req.body);
        const {uid,pwd} = req.body;
        //console.log(uid);
        const db = Db.getDbInstance();
        const result = db.getLogin(uid,pwd);
        result
        .then(data => res.json({data : data}))
        .catch(err => console.log(err));        
    } catch (error) {
        console.log(error);
    }    
})
app.post('/register',(req,res) => {
    try {
        const {uid,pwd,wid} = req.body;
        console.log("Username "+uid);
        const db = Db.getDbInstance();
        const result = db.register(uid,pwd,wid);
        result
        .then(data => res.json({data : data}))
        .catch(err => console.log());
    } catch (error) {
        console.log(error);
    }
})

//read
app.get('/wards',(req,res)=>{
    try{
    const db = Db.getDbInstance();
    const result = db.getAllWards();
    result
    .then(data => res.json({data: data}))
    .catch(err=>console.log(err));
    }
    catch(err){
        console.log(err);
    }

})
app.get('/login',(req,res) => {
    try {
        const db = Db.getDbInstance(); 
    } catch (error) {
        console.log(error);
    }
})
app.get('/',(req,res)=>{
    try{
        res.json({
        ok:true
        })
    }catch(err){
        console.log(err);
    }
})

//update


//delete


app.listen(process.env.PORT,()=> console.log("app is running"));
