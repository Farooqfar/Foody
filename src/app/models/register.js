import mongoose from "mongoose";
import bcrypt from "bcrypt";
const registerSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

registerSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

registerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const register =
  mongoose.models.registerUser ||
  mongoose.model("registerUser", registerSchema);
export default register;
