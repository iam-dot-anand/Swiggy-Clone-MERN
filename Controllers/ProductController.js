const ProductModel = require("../Models/productSchema");
const postProduct = async (req, res) => {
  console.log(req.body); // Log the incoming request body for debugging

  const {
    restaurant_id,
    foodImg,
    foodName,
    foodPrice,
    foodDescription,
    rating,
  } = req.body;

  if (
    !restaurant_id ||
    !foodImg ||
    !foodName ||
    !foodPrice ||
    !foodDescription ||
    !rating
  ) {
    return res.status(400).json({ msg: "Fill All Data" });
  }

  try {
    const result = await ProductModel.create({
      restaurant_id,
      foodImg,
      foodName,
      foodPrice,
      foodDescription,
      rating,
    });

    return res
      .status(201)
      .json({ msg: "Product created successfully", result });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res
      .status(500)
      .json({ msg: "Error creating product", error: err.message });
  }
};

const getProduct = async (req, res) => {
  const product = await ProductModel.find();
  return res.status(200).json({ msg: "Product is: ", product });
};

const getProductByID = async (req, res) => {
  const { restaurant_id } = req.params;
  const result = await ProductModel.find({ restaurant_id });

  return res.status(200).json({ msg: "Food items found", result });
};

const deleteProduct = async (req, res) => {
  await ProductModel.findOneAndDelete(req.params.id);
  return res.status(200).json({ status: "Delete Successfull" });
};

module.exports = { postProduct, getProduct, getProductByID, deleteProduct };
