const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const fetchUser = require('../middleware/fetchUser');
const Cases = require('../models/cases');
const {body, validationResult} = require('express-validator')

//Get all notes
router.get('/fetchallcases', fetchUser, async (req, res) => {
    try {
        console.log("Fetching cases for user ID:", req.user.id);
        const cases = await Cases.find({user: req.user.id})
        res.json(cases)
    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });
    }
})

//Add a new case
router.post('/addcase', fetchUser, async (req, res) => {
    try {
        const {username, type, description, location, evidenceFiles, isAnonymous, phoneNumber, aadhaarNumber, status} = req.body
        
        const casedetail = new Cases({
            user: req.user.id,
            username,
            type, 
            description, 
            location, 
            evidenceFiles, 
            isAnonymous, 
            phoneNumber,
            aadhaarNumber,
            status
        })
        await casedetail.save()
        res.json(casedetail)

    } catch (error) {
        res.send({error: error})
    }
})
module.exports = router