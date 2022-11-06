import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export interface ISoapCeleb {
    name: string
    scent: string
    imgUrl: string
    gender: 'male' | 'female'
}

const celebSchema = new Schema<ISoapCeleb>({
    name: String,
    imgUrl: String,
    scent: String,
    gender: String
});

export const SoapCeleb = model<ISoapCeleb>('SoapCeleb', celebSchema)