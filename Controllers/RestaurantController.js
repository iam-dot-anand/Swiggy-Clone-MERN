const ProductModel = require("../Models/productSchema");
const RestaurantModel = require("../Models/restaurantSchema");
const postRestaurant = async (req, res) => {
  const { image, restaurantName, rating, desc, address, tag } = req.body;
  if (!image || !restaurantName || !rating|| !address) {
    return res.status(400).json({ msg: "Fill All Data" });
  }

  try {
    const result = await RestaurantModel.create({
      image,
      restaurantName,
      rating, 
      desc,
      address,
      tag
    });
    return res
      .status(201)
      .json({ msg: "restaurant created successfully", result });
  } catch (err) {
    return res.status(400).json(err);
  }
};
const getRestaurant = async (req, res) => {
  const result = await RestaurantModel.find();
  return res.status(200).json({ msg: "Restaurant is: ", result });
};
const getRestaurantsFoodItems = async (req, res) => {
  const restaurant_id = req.params.restaurant_id;
  const result = await ProductModel.find({ restaurant_id });
  return res.status(200).json({ msg: "Food items found", result });
};

const deleteRestaurant = async (req, res) => {
  await RestaurantModel.findOneAndDelete(req.params.id);
  return res.status(200).json({ status: "Delete Successfull" });
};

module.exports = {
  postRestaurant,
  getRestaurant,
  deleteRestaurant,
  getRestaurantsFoodItems,
};
