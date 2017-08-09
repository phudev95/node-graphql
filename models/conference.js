import mongoose from 'mongoose';

const conferenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  attendees: {
    type: mongoose.Schema.ObjectId,
    ref: 'Conference'
  }
});

export default mongoose.model('Conference', conferenceSchema);
