var Club = require("../models/club");

class clubController{
    
    static async createClub(name, lat, lon){
        let date = new Date();
        let club = new Club({
            name: name,
            location: {
                lat,
                lon
            }
        });
        try{
            let doc = await club.save();
            return doc;
        }
        catch(err){}
    }

    static async getAllClubs(){
        try{
            let clubList = await Club.find({});
            return clubList;
        }
        catch(err){}
    }
}
module.exports = clubController;