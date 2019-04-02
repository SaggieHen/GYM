var Restaurant = require("../models/restaurant");

class restaurantController{
    
    static async createRestaurant(name, detail, lat, lon, accountId){
        let restaurant = new Restaurant({
            name: name,
            detail: detail,
            location: {
                lat,
                lon
            },
            accountId: accountId
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

    static async getRestaurantByName(name){
        try{
            let restaurantList = await Restaurant.find({name: name});
            return restaurantList;
        }
        catch(err){}
    }
}
module.exports = restaurantController;