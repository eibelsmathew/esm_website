const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  skills: [{ type: String }],
  experience: { type: Number },
  hourlyRate: { type: Number },
  availability: [{ type: Date }],
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
  ratings: [{ type: Number }],
  reviews: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    rating: Number,
  }],
}, { timestamps: true });

workerSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Worker', workerSchema);