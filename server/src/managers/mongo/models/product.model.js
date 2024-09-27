import mongoose from 'mongoose';

const collection = "Products"
const schema = new mongoose.Schema({

	name: {
        type:String,
        required:true
    },
    description: {
		type:String,
	    required:true
    },
	price: {
        type: Number,
        required: true,
        min: 0
    } 
});

const productModel = mongoose.model(collection,schema);
export default productModel;