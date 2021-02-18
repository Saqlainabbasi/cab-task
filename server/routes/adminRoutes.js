const express = require('express');
const router = express.Router()
const { Rule } = require('../model/areaRule')
const { Rate } = require('../model/cabRate')


router.post('/api/addRule', (req, res) => {

    const rule = new Rule(req.body)
    rule.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true

        });
    })
})
router.post('/api/addCabRate', (req, res) => {
    const rate = new Rate(req.body);
    rate.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true
        })
    })

})
router.post('/api/updateRule', (req, res) => {

})
router.delete('/api/deleteRule', (req, res) => {
    const id = req.query.id;
    Rule.findByIdAndRemove(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            messsage: "Data Deleted",
        })
    })
})

module.exports = router