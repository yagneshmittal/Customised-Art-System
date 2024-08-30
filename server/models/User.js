import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true }, // use userEmail as _id
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
});

const User = mongoose.model('User', UserSchema);

export default User;
