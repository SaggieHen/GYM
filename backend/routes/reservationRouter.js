const express = require("express");
var router = express.Router();
var reservationController = require("../controllers/reservationController");
var accountController = require("../controllers/accountController");
var restaurantController = require("../controllers/restaurantController");

async function reservation(request, response, next){
    try{
        let reservation = null;
        reservation = await reservationController.getAllReservations();
        response.json(
            reservation
        );
    }
    catch(err){}
}

async function createReservation(request, response, next){
    try{
        let accountEmail = request.body["accountEmail"];
        let restaurantName = request.body["restaurantName"];
        let seats = request.body["seats"];

        let accountId = (await accountController.getAccountByEmail(accountEmail))[0].id;
        let restaurantId = (await restaurantController.getRestaurantByName(restaurantName))[0].id;

        let reservation = await reservationController.createReservation(accountId, restaurantId, seats);
        
        response.json(
            reservation
        );
    }
    catch(err){
        next(err);
    }
}
router.get("/",reservation);
router.post("/",createReservation);
module.exports = router;