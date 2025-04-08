const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  thumbnail: String,
  duration: String,
  description: String
});

const featureSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});

const productItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  features: [String],
  images: [String],
  videos: [videoSchema],
  reelvideos: [String],
  juniorpack: [featureSchema],
  inthebox: [featureSchema],
  freeinapp: [featureSchema],
  alsobought: [productItemSchema],
  relatedproducts: [productItemSchema],
  ageRange: String,
  category: String,
  rating: Number,
  reviews: Number,
  inStock: Boolean
});

module.exports = mongoose.model('Product', productSchema);