const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/Auth");
const ProductModel = require("../Models/productSchema");
const {postProduct,getProduct, getProductByID ,deleteProduct}= require("../Controllers/ProductController");


router.get("/get", authMiddleware, (req, res) => {
  console.log("------> Logged In User Details:", req.user);
  res.status(200).json([
    {
      name: "Mobile",
      price: "10000",
    },
    {
      name: "Laptop",
      price: "50000",
    },
  ]);
});


router.post("/", postProduct);

router.get("/", getProduct);
router.get("/byId/:restaurant_id", getProductByID);

router.delete("/",deleteProduct);

module.exports = router;
