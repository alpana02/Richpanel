const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');


router.get('/fetchSubscription', fetchuser,async(req,res) => {
    try{
        console.log(req)
        let userDetails = await User.find({_id : req.user.id})
        res.json({
            message: "Plan Fetched Successfuly",
            code: 201,
            data: userDetails
        })

    }catch(err){
        console.log(err)
        res.json({
            status: "failed",
            code: 401,
            error: err
        })
    }
})


router.post('/updateSubscription',fetchuser, async(req,res) => {
    try{
        console.log(req.body)
        let subsciptionStart = Date(Date.now())
        let plan = req.body.plan
        let interval = req.body.interval
        
        let userDetails = await User.updateOne({
            _id : req.user.id
        },{
            $set : {
                plan : plan,
                interval : interval,
                subsciptionStart : subsciptionStart,
                price : req.body.price
            }
        })

        res.json({
            message: "Plan Updated Successfuly",
            code: 201,
            data: userDetails
        })


    }catch(err){
        console.log(err)
        res.json({
            status: "failed",
            code: 401,
            error: err
        })
    }
})


router.post('/deleteSubscription',fetchuser, async(req,res) => {
    try{
        let subsciptionStart = null
        let plan = null
        let interval = null

        let userDetails = await User.updateOne({
            _id : req.user.id
        },{
            $set : {
                plan : plan,
                interval : interval,
                subsciptionStart : subsciptionStart
            }
        })
        res.json({
            message: "Plan Deleted Successfuly",
            code: 201,
            data: userDetails
        })

    }catch(err){
        console.log(err)
        res.json({
            status: "failed",
            code: 401,
            error: err
        })
    }
})

module.exports = router