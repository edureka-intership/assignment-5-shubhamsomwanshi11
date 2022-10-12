const MealType=require('../models/MealType.json')

exports.getMealType=(req,res)=>{
    res.status(200).json({
        message:"Mealtype fatched sucessfully 👍",
        data:MealType
    })
}
