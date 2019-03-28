const express = require("express");
var router = express.Router();
var noticeController = require("../controllers/noticeController");

async function notice(request, response, next){
    try{
        let notice = null;
        notice = await noticeController.getAllNotices();
        response.json(
            notice
        );
    }
    catch(err){}
}

async function notice(request, response, next){
    try{
        let title = request.body["title"];
        let detail = request.body["detail"];

        let notice = await noticeController.createNotice(title,detail);
        response.json(
            notice
        );
    }
    catch(err){
        next(err);
    }
}
router.get("/",notice);
router.post("/",notice);
module.exports = router;