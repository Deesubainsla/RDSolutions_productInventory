

import Category from "../models/categorymodel.js";
import Product from "../models/productmodel.js";
import { error } from "../middlewares/Error.js";
import wrapper from "../middlewares/wrapper.js";
import mongoose from "mongoose";


const getallproduct = wrapper(
    async(req, res)=>{
        const allproduct = await Product.find().populate('category','name');

        if(!allproduct){
            throw new error('Failed in fetching Products', 401);
        }

        res.status(200).json({message:"Products fetched successfully", allproduct})
    }
)


const deleteproduct = wrapper(
    async(req,res)=>{
        const {id} = req.query;
        
        //if we are matching then we will convert the input id:
        // if (!mongoose.Types.ObjectId.isValid(id)) {
        //     throw new error('Invalid product ID', 401);
        // }

        const dltproduct = await Product.deleteOne({_id: id});

        if(dltproduct.deletedCount == 0){
            throw new error('Product not found for delet', 402);
        }

        res.status(200).json({message:"Product deleted successfully"});
    }
)

const addproduct = wrapper(
    async(req,res)=>{
        const{name, price, stock, category, isactive } = req.body;

        const cat = category.toLowerCase();
        if(cat!="electric" && cat!="entertainment" && cat!="study"){
            throw new error("Invalid Category", 401);
        }

        const dbcategory = await Category.findOne({name: category});
        if(!dbcategory){
            throw new error("Category Not found",401);
        }

        const newproduct = new Product({
            name,
            price,
            stock,
            category: dbcategory,
            isactive
        })

        await newproduct.save();

        res.status(200).json({message:"Product created successfully"}, newproduct);
    }
)

const updatepricestock = wrapper(
    async(req,res)=>{
        const{id, price, stock} = req.body;

        const updatedproduct = await Product.findByIdAndUpdate(
            {_id:id},//how to find
            {price, stock},//what to update
            {new:true, runValidators:true}//return new and also run validations
        )

        if(!updatedproduct){
            throw new error('Problem in update product',401);
        }

        res.status(200).json({message:"Product Updated", updatedproduct});

    }
)

const addcategory = wrapper(
    async(req,res)=>{
        const{name} = req.body;


        const newcat = new Category({
            name
        })

        await newcat.save();

        res.status(200).json({message:"Category created successfully"}, newcat);
    }
)


export {getallproduct, deleteproduct, addproduct, addcategory, updatepricestock}