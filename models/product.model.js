import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageProduct: {
    type: String,
    required: true
  },
  stockLevel: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  }
},
  {
  timestamps: true //createdAt, updatedAt
});

const Product = mongoose.model('Product', productSchema)

export default Product
