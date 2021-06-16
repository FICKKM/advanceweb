var expressFunction = require('express');
const router = expressFunction.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const key = "MY_KEY";

var Schema = require('mongoose').Schema;

const adminSchema = Schema({
    username: String,
    password: String,
}, {
    collection: 'admin'
});

let Admin
try {
    Admin = mongoose.model('admin')
} catch (error) {
    Admin = mongoose.model('admin', adminSchema);
}

const compareHash = async(plainText, hashText) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainText, hashText, (err, data)=> {
            if(err){
                reject(new Error('Error bcrypt compare'))
            }else{
                resolve({status: data});
            }
        })
    });
}

const findAdmin = (username) => {
    return new Promise((resolve, reject) => {
        Admin.findOne({username: username}, (err, data) => {
            if(err){
                reject(new Error('Cannot find username!'));
            }else{
                if(data){
                    resolve({id: data._id, username: data.username, password: data.password})
                }else{
                    reject(new Error('Cannot find username!'));
                }
            }
        })
    })
}

router.route('/signin-admin')
    .post( async (req, res)=> {
        const playload = {
            username: req.body.username,
            password: req.body.password
        };

        console.log(playload);

        try {
            const result = await findAdmin(playload.username);
            const loginStatus = await compareHash(playload.password, result.password);
            
            const status = loginStatus.status;

            if(status){
                const token = jwt.sign(result, key, {expiresIn: 60*5});
                res.status(200).json({result, token, status});
            }else{
                res.status(200).json({status});
            }

        } catch (error) {
            res.status(404).send(error);
        }
        
    })

module.exports = router