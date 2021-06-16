const expressFunction = require('express');
const mongoose = require('mongoose');
var expressApp = expressFunction();

const url = 'mongodb://localhost:27017/project';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true };

var Schema = require("mongoose").Schema;
const menuSchema = Schema({
    id: String,
    name: String,
    detail: String,
    price: Number,
    file: String,
    img: String
}, {
    collection: 'menu'
});

let Menu 
try {
    Menu = mongoose.model('menu')
} catch (error) {
    Menu = mongoose.model('menu', menuSchema);
}

expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next()
});
expressApp.use(expressFunction.json());
expressApp.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        next();
    })
    .catch(err=> {
        console.log('Cannot connected to MongoDB!');
        res.status(501).send('Cannot connected to MongoDB!')
    });
});


const addMenu = (menuData) => {
    return new Promise ((resolve, reject) => {
        var new_menu = new Menu(
            menuData
        );
        new_menu.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert product to DB!'));
            }else{
                resolve({message: 'Menu added successfully'});
            }
        });
    }) ;
}

const getMenu = () => {
    return new Promise ((resolve, reject) => {
        Menu.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannot get products!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get products!'));
                }
            }
        })
    });
}

expressApp.post('/products/add', (req,res)=>{
    console.log('add');
    addMenu(req.body)
        .then(result => {
            console.log('result');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

expressApp.get('/menus/get', (req,res) => {
    console.log('get');
    getMenu()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

expressApp.listen(4400, function(){
    console.log('Listening on port 4400');
});