import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function AddProduct({mobiles,setMobiles}) {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({name:"",description:"",price:"",img:""})
      const handleAdd = (e)=>{
        e.preventDefault()
        const newProduct = {
            id:Date.now(),
            name:formData.name,
            description:formData.description,
            price:formData.price,
            img:formData.img
        }
        setMobiles([...mobiles,newProduct])
        setFormData({name:"",description:"",price:"",img:""})
        navigate("/")
      }
      const handleCancel = (e) =>{
        e.preventDefault()
        navigate("/")
      }
  return (
    <form>
        <input type="text" value={formData.name} placeholder='Enter Name' onChange={(e)=>{setFormData({...formData,name:e.target.value})}}/>
        <input type="text" value={formData.description} placeholder='Enter Product Description' onChange={(e)=>{setFormData({...formData,description:e.target.value})}}/>
        <input type="number" value={formData.price} placeholder='Enter Price' onChange={(e)=>{setFormData({...formData,price:e.target.value})}}/>
        <input type="file" src={formData.img} placeholder='Choose File' accept = "image/*" onChange={(e)=>{
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onloadend = ()=>{
                setFormData({...formData,img:reader.result})
            }
            if(file) reader.readAsDataURL(file)
        }}/>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleCancel}>Cancel</button>
    </form>
  )
}

export default AddProduct