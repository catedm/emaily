const mongoose = require('mongoose');
const { Schema } = mongoose; // const Schema = mongoose.Schema
const RecipientSchema = require('./recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  from: String,
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0,
  },
  no: {
    type: Number,
    default: 0,
  },
  _user: {
    type: Schema.Types.ObjectId,
    // this tells mongo that the reference that we are making the ObjectID to, is the users collection
    ref: 'User'
  },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);