import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import _ from 'lodash'
export interface ISoapCeleb {
    name: string
    scent: string
    imgUrl: string
    gender: 'male' | 'female'
}

const celebSchema = new Schema<ISoapCeleb>({
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    scent: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female'], default: 'male' }
});

export const SoapCeleb = model<ISoapCeleb>('SoapCeleb', celebSchema)