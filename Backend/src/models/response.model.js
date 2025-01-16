import mongoose, {Schema} from 'mongoose'

const responseSchema = new Schema({
    prompt: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})


export const Response = mongoose.model('Response', responseSchema)