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
        let name = request.body["name"];
        let detail = request.body["detail"];
        let location = request.body["location"];
        let accountEmail = request.body["accountEmail"];

        let accountId = (await accountController.getAccountByEmail(accountEmail))[0].id;
        
        let restaurant = await restaurantController.createRestaurant(name,detail,location.lat,location.lon, accountId);
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