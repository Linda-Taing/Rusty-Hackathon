import { Schema } from "mongoose";

export const LikerSchema = new Schema(
  {
    materId: { type: Schema.Types.ObjectId, required: true, ref: 'Mater' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

LikerSchema.virtual('Mater', {
  localField: 'materId',
  foreignField: '_id',
  justOne: true,
  ref: 'Mater'
})
