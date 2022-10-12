const City=require('../models/City.json')

exports.getCityList=(req,res)=>{
    res.status(200).json({
        message:"City fatched sucessfully 👍",
        data:City
    })
}