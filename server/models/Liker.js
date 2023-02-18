import { Schema } from "mongoose";

export const LikerSchema = new Schema(
  {
    materId: { type: Schema.Types.ObjectId, required: true, ref: 'Mater' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

LikerSchema.virtual('Mater', {
  localField: 'materId',
  foreignField: '_id',
  justOne: true,
  ref: 'Mater'
})
LikerSchema.virtual('Creator', {
  localField: 'creatorId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
