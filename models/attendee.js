import mongoose from 'mongoose';

const attendeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model('Attendee', attendeeSchema);
