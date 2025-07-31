import { Schema, model, Document } from 'mongoose';

const itemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
    tags: [{ type: String, required: false }],
});

const Item = model('Item', itemSchema);

export default Item;
