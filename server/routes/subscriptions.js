const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Subscription');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Subscription using: GET "/api/subscription/getuser". Login required
router.get('/fetchallsubscription', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(subscription)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new subscription using: POST "/api/subscription/addnote". Login required
router.post('/addnote', fetchuser, async (req, res) => {
        try {
            const { title, description, tag } = req.body;

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


// ROUTE 4: Delete an existing subscription using: DELETE "/api/subscription/deletenote". Login required
router.delete('/deletesubscription/:id', fetchuser, async (req, res) => {
    try {
        // Find the subscription to be delete and delete it
        let subscription = await Subscription.findById(req.params.id);
        if (!subscription) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this subscription
        if (subscription.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Subscription has been deleted", subscription: subscription });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router