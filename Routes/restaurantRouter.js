const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/Auth");
const RestaurantModel = require("../Models/restaurantSchema");
const {postRestaurant,getRestaurant,deleteRestaurant, getRestaurantsFoodItems}= require("../Controllers/RestaurantController");



router.post("/", postRestaurant);

router.get("/", getRestaurant);

router.get("/:restaurant_id", getRestaurantsFoodItems);

router.delete("/",deleteRestaurant);

module.exports = router;
