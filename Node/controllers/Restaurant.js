const Restaurant = require('../models/Restaurant.json')


exports.getRestaurantByCity = (req, res) => {
    const result = Restaurant.filter((item) => item.city_name == req.params.city_name)
    result.length ?
        res.status(200).json({
            message: "restaurants fetched successfully",
            data: result
        }) :
        res.status(200).json({
            message: "restaurants by the city you filtered do not exist"
        })
}

exports.getRestaurantById = (req, res) => {
    const result = Restaurant.filter(item => item._id == req.params.resId)
    result.length?
    res.status(200).json({
        message: "Restaurants fatched sucessfully 👍",
        data: result
    }):

    res.status(200).json({
        message:"Restaurants you searched do not exist "
    })
}

exports.getRestaurantByCost=(req,res)=>{
    const result=Restaurant.filter((item)=>item.cost<=req.params.cost)
    result.length?
    res.status(200).json({
        message:"Restaurats fatched successfully",
        data:result
    }):
    res.status(200).json({
        message:"Restaurats for the selected price do not exist!",
      })

}

exports.getRestaurantByName=(req,res)=>{
    const result=Restaurant.filter((index)=>index.name==req.params.name)
    result.length?
    res.status(200).json({
        data:result
    }):
    res.status(200).json({
        message:"The restaurant you searched for does not exist"
    })
}
exports.getAllRestaurants=(req,res)=>{
    res.status(200).json({
        data:Restaurant
    })
}