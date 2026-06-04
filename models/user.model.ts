import bcrypt from "bcryptjs";
import { Schema, model, Document, models } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "MILKMAN" | "CUSTOMER";
  is_verified: boolean
}

const userSchema = new Schema<IUser>(
  {
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
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["MILKMAN", "CUSTOMER"],
      default: "CUSTOMER",
    },

    is_verified: {
      type: Boolean,
      default: false,
    }
    
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  //   next()
});

export const User = models?.User || model<IUser>("User", userSchema);
