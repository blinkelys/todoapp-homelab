import { Schema, model, Document } from 'mongoose';

const tagSchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true }
});

const Tag = model('Tag', tagSchema);

export default Tag;
