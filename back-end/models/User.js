const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    handle: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    eligible : {
      type: Array,
      required: false,
    }
  },
  {
    timestamps: true,
  }
)

// create mongoose Model
const User = mongoose.model('User', userSchema)

// export the model so other modules can import it
module.exports = {
  User,
}