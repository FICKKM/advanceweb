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

const employeeSchema = Schema({
    id: String,
    name: String,
    username: String,
    password: String,
    email: String,
    tel: String,
    file: String,
    img: String
}, {
    collection: 'employee'
});

let Employee 
try {
    Employee = mongoose.model('employee')
} catch (error) {
    Employee = mongoose.model('employee', employeeSchema);
}

const memberSchema = Schema({
    id: String,
    name: String,
    email: String,
    tel: String,
    sum_price: Number
}, {
    collection: 'member'
});

let Member 
try {
    Member = mongoose.model('member')
} catch (error) {
    Member = mongoose.model('member', memberSchema);
}

const billSchema = Schema({
    id: String,
    name: String,
    sum: Number,
}, {
    collection: 'bill'
});

let Bill 
try {
    Bill = mongoose.model('bill')
} catch (error) {
    Bill = mongoose.model('bill', billSchema);
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

//Method for MENU
const addMenu = (menuData) => {
    return new Promise ((resolve, reject) => {
        var new_menu = new Menu(
            menuData
        );
        new_menu.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert Menu to DB!'));
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
                reject(new Error('Cannot get Menus!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get menus!'));
                }
            }
        })
    });
}

const delMenu = (menuData) => {
    return new Promise ((resolve, reject) => {
        var query = menuData;
        Menu.deleteOne(query,(err, data) => {
            if(err){
                reject(new Error('Cannot Delete Menu in DB!'));
            }else{
                resolve({message: 'Menu delete successfully'});
            }
        });
    }) ;
}

expressApp.post('/menus/add', (req,res)=>{
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

expressApp.delete('/menus/delete', (req,res)=>{
    console.log('delete');
    delMenu(req.body)
        .then(result => {
            console.log('result');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

//Method for Member
const addMember = (memberData) => {
    return new Promise ((resolve, reject) => {
        var new_member = new Member(
            memberData
        );
        new_member.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert member to DB!'));
            }else{
                resolve({message: 'Member added successfully'});
            }
        });
    }) ;
}

const getMember = () => {
    return new Promise ((resolve, reject) => {
        Member.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannot get members!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get members!'));
                }
            }
        })
    });
}

const delMember = (memberData) => {
    return new Promise ((resolve, reject) => {
        var query = memberData;
        Member.deleteOne(query,(err, data) => {
            if(err){
                reject(new Error('Cannot Delete Member in DB!'));
            }else{
                resolve({message: 'Member delete successfully'});
            }
        });
    }) ;
}

expressApp.post('/members/add', (req,res)=>{
    console.log('add');
    addMember(req.body)
        .then(result => {
            console.log('result');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

expressApp.get('/members/get', (req,res) => {
    console.log('get');
    getMember()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

expressApp.delete('/members/delete', (req,res)=>{
    console.log('delete');
    delMember(req.body)
        .then(result => {
            console.log('result');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

//Method for Employee
const addEmployee = (employeeData) => {
    return new Promise ((resolve, reject) => {
        var new_employee = new Employee(
            employeeData
        );
        new_employee.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert Employee to DB!'));
            }else{
                resolve({message: 'Employee added successfully'});
            }
        });
    }) ;
}

const getEmployee = () => {
    return new Promise ((resolve, reject) => {
        Employee.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannot get Employees!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get Employees!'));
                }
            }
        })
    });
}

const delEmployee = (employeeData) => {
    return new Promise ((resolve, reject) => {
        var query = employeeData;
        Employee.deleteOne(query,(err, data) => {
            if(err){
                reject(new Error('Cannot Delete Employee in DB!'));
            }else{
                resolve({message: 'Employee Delete successfully'});
            }
        });
    }) ;
}

expressApp.post('/employees/add', (req,res)=>{
    console.log('add');
    addEmployee(req.body)
        .then(result => {
            console.log('result');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

expressApp.get('/employees/get', (req,res) => {
    console.log('get');
    getEmployee()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

//Method for Bill
const addBill = (billData) => {
    return new Promise ((resolve, reject) => {
        var new_bill = new Bill(
            billData
        );
        new_bill.save((err, data) => {
            if(err){
                reject(new Error('Cannot insert bill to DB!'));
            }else{
                resolve({message: 'Bill added successfully'});
            }
        });
    }) ;
}

const getBill = () => {
    return new Promise ((resolve, reject) => {
        Bill.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannot get bills!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannot get bills!'));
                }
            }
        })
    });
}

expressApp.post('/bills/add', (req,res)=>{
    console.log('add');
    console.log(req.body);
    addBill(req.body)
    .then(result => {
        console.log('result');
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
});

expressApp.delete('/employees/delete', (req,res)=>{
    console.log('delete');
    delEmployee(req.body)
        .then(result => {
            console.log('result');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});

expressApp.get('/bills/get', (req,res) => {
    console.log('get');
    getBill()
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