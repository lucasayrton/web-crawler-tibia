const mongoose = require('mongoose');

const Apparition = mongoose.Schema(
  {
    world: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'World',
      required: true,
    },
    monster: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Monster',
      required: true,
    },
    day: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Apparition', Apparition);
