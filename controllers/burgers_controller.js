//ROUTER FILE - using the keywords from ORM (ALL, INSERT, and UPDATE)

const express = require("express");
const router = express.Router();

// Here we import the burger model to use the db funtions ----
const burger = require("../models/burger");


// Get all burger data from DB named 'burgers' -----------------------------------------------
router.get("/", (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject); 
    })
});

// ADDS a burger to the DB-----------------------------------------------------
router.post("/api/burgers", (req, res) => {
    burger.insert([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured], result => {
        res.json({
            id: result.insertId
        });
    });
});

//UPDATES a burger from waiting list to devoured list ------------------------------------------
router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;