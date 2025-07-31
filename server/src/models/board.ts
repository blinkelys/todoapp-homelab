import { Schema, model, Document } from 'mongoose';

const boardSchema = new Schema({
  name: { type: String, required: true },
  orderId: { type: Number, required: true, unique: true }
});

const Board = model('Board', boardSchema);

export default Board;
