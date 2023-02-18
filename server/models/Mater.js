import { Schema } from "mongoose";


export const MaterSchema = new Schema(
    {
        name: { type: String, required: true, minLength: 2, maxLength: 30 },
        language: { type: String, required: true, minLength: 2, maxLength: 30 },
        voltage: { type: String, required: true, minLength: 2, maxLength: 10 },
        type: {
            type: String,
            enum: ["Bender", "Assassin", "Battle", "Astromech", "Protocol", "Helper", "Toaster"],
            required: true
        },
        imgUrl: { type: String },
        description: { type: String, maxLength: 300 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: "Account" },
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

MaterSchema.virtual('Creator', {
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true,
    ref: 'Account'
})

MaterSchema.virtual('StatusUpdate', {
    localField: '_id',
    foreignField: 'materId',
    ref: 'StatusUpdate'
})
MaterSchema.index({ materId: 1, creatorId: 1 }, { unique: true })