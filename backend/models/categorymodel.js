import mongoose,{Schema, model} from "mongoose";

const categoryschema = new Schema({
    name:{
        type:String,
        required: true,
        enum:['Electric','Entertainment','Study'],
        unique: true
    }
},{timestamps: true})

const Category = mongoose.models.Category || model("Category", categoryschema);

export default Category