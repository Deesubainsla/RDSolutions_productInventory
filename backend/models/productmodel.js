import mongoose, { model, Schema,Types } from "mongoose";

const productschema = new Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    stock:{
        type:Number,
        required: true
    },
    category:{
        type:Types.ObjectId,
        ref: "Category"
    },
    isactive:{
        type:Boolean,
        required: true
    },
},{timestamps: true})

const Product = mongoose.models.Product || model("Product",productschema);

export default Product