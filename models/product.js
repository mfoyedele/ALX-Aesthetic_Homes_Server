const mongoose = require('mongoose')
const Schema = mongoose.Schema

const thumbnailSchema = new Schema({
  url: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true }
});

const imageSchema = new Schema({  
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  url: { type: String, required: true },
  filename: { type: String, required: true },
  size: { type: Number, required: true },
  type: { type: String, required: true },
  thumbnails: {
    small: thumbnailSchema,
    large: thumbnailSchema,
    full: thumbnailSchema
  }
});

const productSchema = Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  images: [imageSchema],
  description: {
type: String,
  required: [true, 'description must be provided'],
  },
  colors: { type: [String], required: true },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },    
  },
  stock: {
    type: Number,
    required: [true, 'stock number must be provided'],
  },
  stars: {
    type: Number,
    default: 4.5,
  },
  reviews: {
type: Number,
    required: [true, 'review number must be provided'],
  },
  category: {
type: String,
    enum: {
      values: ['all', 'office', 'living room', 'kitchen', 'bedroom', 'dining', 'kids' ],
      message: '{VALUE} is not supported',
    },
  },
  shipping: {
type: Boolean,
  default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },  
})

module.exports = mongoose.model('Product', productSchema)
