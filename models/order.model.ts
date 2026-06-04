import { Schema, model, models, Document, Types } from "mongoose";

export interface IOrder extends Document {
  milkman_id: Types.ObjectId;
  customer_id: Types.ObjectId;
  category: "Cow Milk" | "Buffalo Milk" | "Paneer" | "Curd" | "Ghee";
  price: number;
  amount: number;
  quantity: number;
}

const orderSchema = new Schema<IOrder>(
  {
    milkman_id: {
      type: Schema.Types.ObjectId,
      ref: "Milkman",
      required: true,
    },
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    category: {
      type: String,
      enum: ["Cow Milk", "Buffalo Milk", "Paneer", "Curd", "Ghee"],
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Order = models?.Order || model<IOrder>("Order", orderSchema);

export default Order;
