import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    images: [String],
    category: String,
    brand: String,
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    skus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Sku" }],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
