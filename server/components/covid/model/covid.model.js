
import mongoose from "./base.model";
const userSchema = new mongoose.Schema({
    newcase:  String,
    create_date: { type: Date, default: Date.now }
});

const Covid = mongoose.model('covid', userSchema);

const ItemModel = {};

ItemModel.createItem = (item) => {
   return Covid.create(item);
}

export default ItemModel;