var Reservation = require("../models/reservation");

class reservationController{
    
    static async createReservation(accountId, restaurantId, seats){
        let date = new Date();
        let reservation = new Reservation({
            accountId: accountId,
            restaurantId: restaurantId,
            date: date,
            seats: seats
        });
        try{
            let doc = await reservation.save();
            return doc;
        }
        catch(err){}
    }

    static async getAllReservations(){
        try{
            let reservationList = await Reservation.find({});
            return reservationList;
        }
        catch(err){}
    }
}
module.exports = reservationController;