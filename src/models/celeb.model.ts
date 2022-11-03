import mongoose from 'mongoose';
const { Schema, model } = mongoose;

interface ISoapCeleb {
    name: string
    soapType: string
    imgUrl: string
    born: string
    gender: 'male' | 'female'
}

const celebSchema = new Schema<ISoapCeleb>({
    name: { type: String },
    imgUrl: { type: String },
    soapType: { type: String },
    born: { type: String },
    gender: { type: String }
});

export const Celebs = model<ISoapCeleb>('SoapCeleb', celebSchema)