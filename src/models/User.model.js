import mongoose from "mongoose";
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
  phone: String,
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    addresses: [addressSchema],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
