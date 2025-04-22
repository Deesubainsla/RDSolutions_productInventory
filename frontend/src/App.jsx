import { useState, useEffect } from 'react'
import Navbar from './component/Navbar'
import Productcard from './component/Productcard'
import axios from 'axios'
import Addproduct from './component/Addproduct';


function App() {
 
  const [products, setproducts] = useState([]);

  useEffect(() => {
    (async()=>{
      try {
        const res = await axios.get('http://localhost:4000/api/v1/getallproduct');

        setproducts(res.data.allproduct);
        // console.log("data:",res.data.allproduct);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  

  return (
    <>
      <div className='h-screen w-screen '>
        <Navbar/>
        <Addproduct/>
        <div className='gap-2'>
        {products.length>0 && products.map(({_id, name, price, stock, isactive, category})=>(
            <Productcard key={_id} id={_id} name={name} price={price} stock={stock} isactive={isactive} category={category.name} />
        ))}
        </div>
      </div>
    </>
  )
}

export default App
