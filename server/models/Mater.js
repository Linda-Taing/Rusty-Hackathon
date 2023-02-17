import { Schema } from "mongoose";

export const MaterSchema = new Schema(
    {
        name: { type: String, required: true, minLength: 2, maxLength: 30 },
        voltage: { type: String, required: true, minLength: 2, maxLength: 10},
        type: { enum: ["Bender", "Assassin", "Battle", "Astromech", "Helper"] },
        imgUrl: { type: String, required: true},
        description: {type: String, maxLength: 300}
    },
    { timestamps: true, toJSON: { virtuals: true } } 
);