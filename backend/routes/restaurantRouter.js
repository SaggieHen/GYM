const express = require("express");
var router = express.Router();
var restaurantController = require("../controllers/restaurantController");

async function restaurant(request, response, next){
    try{
        let restaurant = null;
        restaurant = await restaurantController.getAllRestaurants();
        response.json(
            restaurant
        );
    }
    catch(err){}
}

async function createRestaurant(request, response, next){
    try{
        let title = request.body["title"];
        let detail = request.body["detail"];

        let restaurant = await restaurantController.createRestaurant(title,detail);
        response.json(
            restaurant
        );
    }
    catch(err){
        next(err);
    }
}
router.get("/",restaurant);
router.post("/",createRestaurant);
module.exports = router;