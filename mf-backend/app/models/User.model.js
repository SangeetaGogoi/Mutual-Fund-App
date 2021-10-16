import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  }
})

const User = mongoose.model('User', UserSchema)
export default User;