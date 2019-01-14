const mongoose = require('mongoose');

const Monster = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    linkTibiaBosses: {
      type: String,
    },
    imageTibiaBosses: {
      type: String,
    },
    apparitions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apparition',
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Monster', Monster);
