import { Schema, model, models, Document, Types } from "mongoose";

export interface IAddress extends Document {
  user_id: Types.ObjectId;
  customer_id: Types.ObjectId;
  house_no: number;
  street: string;
  area: string;
  city: string;
  state: string;
  pincode: number;
  latitude: number;
  longitude: number;
  landmark: string;
}

export const addressSchema = new Schema<IAddress>({
  user_id: {
    type: Schema.Types.ObjectId,
  },
  customer_id: {
    type: Schema.Types.ObjectId,
  },
  house_no: Number,
  street: String,
  area: String,
  city: String,
  state: String,
  pincode: Number,
  latitude: Number,
  longitude: Number,
  landmark: String,
});

export const Address =
  models?.Address || model<IAddress>("Address", addressSchema);
