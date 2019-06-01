import * as mongoose from 'mongoose';
export const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  qty: Number,
});
