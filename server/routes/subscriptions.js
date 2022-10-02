const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Subscription = require('../models/Subscription');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Subscription using: GET "/api/subscription/getuser". Login required
router.get('/fetchallsubscriptions', fetchuser, async (req, res) => {
    try {
        const subscriptions = await Subscription.find({ user: req.user.id });
        res.json(subscriptions)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new subscription using: POST "/api/subscriptions/addsubscription". Login required
router.post('/addsubscription', fetchuser, async (req, res) => {
        try {
            const { plan, interval } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const subscription = new Subscription({
                plan, interval, user: req.user.id
            })
            const savedSubscription = await subscription.save()

            res.json(savedSubscription)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Delete an existing subscription using: DELETE "/api/subscription/deletesubscription". Login required
router.delete('/deletesubscription/:id', fetchuser, async (req, res) => {
    try {
        // Find the subscription to be delete and delete it
        let subscription = await Subscription.findById(req.params.id);
        if (!subscription) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this subscription
        if (subscription.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        subscription = await Subscription.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Subscription has been deleted", subscription: subscription });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
