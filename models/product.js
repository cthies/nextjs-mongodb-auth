import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    sku: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    },
})


export default mongoose.models.Product || mongoose.model('Product', productSchema)