var Restaurant = require("../models/restaurant");

class restaurantController{
    
    static async createRestaurant(name, detail, lat, lon){
        let restaurant = new Restaurant({
            name: name,
            location: {
                lat,
                lon
            }
        });
        try{
            let doc = await restaurant.save();
            return doc;
        }
        catch(err){}
    }

    static async getAllRestaurants(){
        try{
            let restaurantList = await Restaurant.find({});
            return restaurantList;
        }
        catch(err){}
    }
}
module.exports = restaurantController;