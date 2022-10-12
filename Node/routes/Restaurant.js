const express = require('express')

const city=require('../controllers/City')
const mealtype=require('../controllers/MealType')
const restaurant=require('../controllers/Restaurant')

const router = express.Router()

router.get('/cityList', city.getCityList);
router.get('/getRestaurantsbycity/:city_name',restaurant.getRestaurantByCity);
router.get('/getAllRestaurants',restaurant.getAllRestaurants);
router.get('/getRestaurantByName/:name',restaurant.getRestaurantByName);
router.get('/mealtype', mealtype.getMealType);
router.get('/getRestaurantById/:resId', restaurant.getRestaurantById);
router.get('/getRestaurantabove/:cost', restaurant.getRestaurantByCost);

module.exports = router; 