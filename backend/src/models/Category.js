import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    image_url: {
        type: String,
        required: true,
    },
}, {
    versionKey: false
}
)

export default model("Category", categorySchema)