

import mongoose from "mongoose";

//It will connect the mongodb to our backend:

const dbconnect = (url)=>{
        mongoose.connect(url)
        .then((res)=>{
            console.log("DBconnected successfully");
        })
        .catch((error)=>{
            console.log(`Error occured in db connection: ${error}`);
        })
}

export default dbconnect