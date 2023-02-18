import { Schema } from "mongoose";

export const LikerSchema = new Schema(
  {
    materId: { type: Schema.Types.ObjectId, required: true, ref: 'Mater' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

LikerSchema.virtual('Mator', {
  localField: 'matorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Mator'
})
