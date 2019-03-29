var Notice = require("../models/notice");

class noticeController{
    
    static async createNotice(title,detail){
        let date = new Date();
        let notice = new Notice({
            title: title,
            detail: detail
        });
        try{
            let doc = await notice.save();
            return doc;
        }
        catch(err){}
    }

    static async getAllNotices(){
        try{
            let noticeList = await Notice.find({});
            return noticeList;
        }
        catch(err){}
    }
}
module.exports = noticeController;