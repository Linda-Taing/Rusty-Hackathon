import { Schema } from "mongoose";
import { MaterSchema } from "./Mater.js";

export const StatusUpdateSchema = new Schema(
    {
        description: { type: String, required: true, minLength: 2, maxLength: 300 },
        likes: { type: Number, default: 0 },
        materId: { type: Schema.Types.ObjectId, required: true, ref: "Mater" }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

MaterSchema.virtual('Mater', {
    localField: 'materId',
    foreignField: '_id',
    justOne: true,
    ref: 'Mater'
})