const mongoose = require('mongoose');
const {Schema} = mongoose;

const SubscritionSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    plan:{
        type: String,
        required: true
    },
    interval:{
        type: String,
        required: true, 
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('subscrition', SubscritionSchema);