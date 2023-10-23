import { Schema } from "mongoose";

export const BossSchema = new Schema(
    {
        name: { type: String, required: true, minLength: 1, maxLength: 22 },
        description: { type: String, required: true, minLength: 1, maxLength: 250 },
        picture: { type: String, required: false, maxLength: 500 },
        health: { type: Number, required: true },
        level: { type: Number, default: 1, min: 1, max: 1000 },
        type: { type: String, default: "Human", minLength: 1, maxLength: 50 },
        damage: { type: Number, required: true, min: 1, max: 100000 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }
)

BossSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})