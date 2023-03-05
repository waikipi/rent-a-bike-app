import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
	user: {type: String},
	time: [{type: String}],
	quantity: [{type: Number}],
	totalPrice: {type: Number},
	bookedAt: {type: String}
},
{
	timestamps: true,
	versionKey: false
});

export default mongoose.model('Order', OrderSchema);