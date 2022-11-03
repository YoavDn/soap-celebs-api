import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export interface ISoapCeleb {
    name: string
    scent: string
    imgUrl: string
    born: string
    gender: 'male' | 'female'
}

const celebSchema = new Schema<ISoapCeleb>({
    name: { type: String },
    imgUrl: { type: String },
    scent: { type: String },
    born: { type: String },
    gender: { type: String }
});

export const SoapCeleb = model<ISoapCeleb>('SoapCeleb', celebSchema)