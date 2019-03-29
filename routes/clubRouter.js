const express = require("express");
var router = express.Router();
var clubController = require("../controllers/clubController");

async function club(request, response, next){
    try{
        let club = null;
        club = await clubController.getAllClubs();
        response.json(
            club
        );
    }
    catch(err){}
}

async function club(request, response, next){
    try{
        let name = request.body["name"];
        let lat = request.body["lat"];
        let lon = request.body["lon"];

        let club = await clubController.createClub(name, lat, lon);
        response.json(
            club
        );
    }
    catch(err){
        next(err);
    }
}
router.get("/",club);
router.post("/",club);
module.exports = router;