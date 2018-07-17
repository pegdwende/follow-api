/**
 * Created by pegdwende on 7/15/2018.
 */
import express from "express";
import User from '../models/User';


const router = express.Router();

var MongoClient = require('mongodb').MongoClient;

var URL = 'mongodb://localhost:27017/follow';

router.post("/",(req,res)=>{
   const {credentials } = req.body;



MongoClient.connect(URL, function(err, client) {
    if (err) return

    const db = client.db("follow");

    var collection = db.collection('users');

        collection.find({email: credentials.email}).toArray(function(err, docs) {
            console.log(docs[0]);
            return res.send({success:true});

        })
    ;
});

   // User.findOne({email:credentials.email}).then(user=>{
   //     console.log(user);
   //      if(user){
   //          res.send({success:true});
   //      }
   //      else{
   //          res.status(400).json({errors: {global:"Invalid credentials"}})
   //     }
   // }
   // );
});

export default router;