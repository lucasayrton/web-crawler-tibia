import mongoose from 'mongoose';

const MonsterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  linkTibiaBosses: { type: String, required: true },
});
