var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var jwt = require ('jwt-simple');

mongoose.Promise = Promise;

var app = express();

var User = require ('./models/User.js');

var posts = [
    { message : 'hello'},
    { message :  'hi'}
]

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req,res)=>{
    res.send(posts)
});

app.get('/users', async (req,res)=>{

    try {  
        var user = await User.find({}, '-password -__v');
        console.log(user);
        res.send(user)

    } catch (error) {
        console.log(error);
        res.sendStatus(500);      
    }
});

app.get('/profile/:id', async (req,res)=>{

    //console.log(req.params.id);

    try {  
        var user = await User.findById(req.params.id, '-password -__v');
        console.log(user);
        res.send(user)

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        
    }
  
});

app.post('/register',(req,res)=>{
    var userData = req.body;
    console.log(userData.email);

    var user = new User(userData); 
    user.save((err, result) => {
        if (err)
            console.log('saving user error');
           
            res.sendStatus(200);
    });
});
app.post('/login', async (req,res) => {
    var userData = req.body;
    
    var user = await User.findOne({email : userData.email}); 

    if(!user)
       return res.status(401).send({message : "Email or Password is invalid"}); 
    
    if(userData.password != user.password)
       return res.status(401).send({message : "Email or Password is invalid"});
    
    var playload = {};

    var token = jwt.encode(playload, '123');

     console.log(token);
     //console.log(userData);
     
  res.status(200).send({token});
});


mongoose.connect('mongodb://admin:admin123@ds123012.mlab.com:23012/login-exemple',{ useNewUrlParser: true }, (err) => {
    if (!err)
    console.log('connect to mongoose');
})
app.listen(3000);