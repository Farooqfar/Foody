import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  sale: {
    type: Boolean,
  },
  image: {
    type: String,
  },
});

const addProduct =
  mongoose.models.addProducts || mongoose.model("addproduct", productSchema);
export default addProduct;
