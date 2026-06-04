// models/doctor.model.ts

import { Schema, model, Document, Types, models } from "mongoose";

export interface Imilkman extends Document {
  user_id: Types.ObjectId;
  business_name: string;
  service_radius_km: number;
  rating: number;
}

const milkmanSchema = new Schema<Imilkman>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    business_name: {
      type: String,
    },
    service_radius_km: {
      type: Number,
      default: 10,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Milkman = models?.Milkman || model<Imilkman>("Milkman", milkmanSchema);
