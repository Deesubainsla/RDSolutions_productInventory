import express from 'express'
import dotenv from 'dotenv'
import { errormiddleware } from './middlewares/Error.js';
import dbconnect from './utils/db.js';
import cors from 'cors'
import { addcategory, addproduct, deleteproduct, getallproduct, updatepricestock } from './controllers/Generalcontrollers.js';

dotenv.config();
dbconnect(process.env.DB_url);

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors('*'));


app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.post('/api/v1/addcategory',addcategory);
app.post('/api/v1/addproduct', addproduct);
app.get('/api/v1/getallproduct',getallproduct);
app.delete('/api/v1/dltproduct',deleteproduct);
app.put('/api/v1/updateproduct', updatepricestock);




//It will place at last of all request
app.use(errormiddleware);

app.listen(PORT, ()=>{
    console.log(`Your app is listning on port ${PORT}`);
})