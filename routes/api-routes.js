let express = require("express");

let router = express.Router();

let food = require("../models/food");
let nutrition = require("../public/js/foodnutrition")

router.get("/", (req,res) => {
food.all("/", function(req, res){
    let nutrition = {
        food: data
    };
    console.log(nutrition);
})
    res.render("food")
}); 

router.post("/api/food", (req,res) => {
    let nutrition = new nutrition(req.body.name,1);
    db.food.create(nutrition).then((newNutrition) =>{
        res.json(newNutrition);
    });
});

module.exports = router;