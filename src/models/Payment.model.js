import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    method: { type: String, enum: ["card", "upi", "paypal", "cod"], required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
    transactionId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);
