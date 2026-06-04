import { Schema, model, Document, models, Types } from "mongoose";

import { IAddress, addressSchema } from "./address.model";

export interface ICustomer extends Document {
  user_id: Types.ObjectId;
  milkman_id: Types.ObjectId;
  name: string;
  address?: IAddress;
  preferred_delivery_time: Date;
  wallet_balance: number;
}

const customerSchema = new Schema<ICustomer>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    milkman_id: {
      type: Schema.Types.ObjectId,
      ref: "Milkman",
    },
    name: {
      type: String,
      trim: true,
    },

    address: {
      type: addressSchema,
      required: true,
    },

    preferred_delivery_time: {
      type: Date,
    },

    wallet_balance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Customer =
  models?.Customer || model<ICustomer>("Customer", customerSchema);