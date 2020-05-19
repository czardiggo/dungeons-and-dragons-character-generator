import { model, Schema } from 'mongoose' 

const CharacterSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  race: {
    type: String,
    required: true
  },
  tendency: {
    type: String,
    required: true
  },
  playerName: {
    type: String
  }
})

const Character = model('Character', CharacterSchema)

export default Character