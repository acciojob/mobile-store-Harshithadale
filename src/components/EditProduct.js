import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mobiles from '../assets/mobiles';

function EditProduct({setMobiles}) {
  const navigate = useNavigate()
  const { id } = useParams();
  const obj = mobiles.find(mob=>mob.id === Number(id))
  const [formData,setFormData] = useState({
    id:Number(id),
    name:obj.name,
    description:obj.description,
    price:obj.price,
    image: obj.image,
    file:null
  })
  const handleChange=(e)=>{
    e.preventDefault()
    setFormData({...formData,[e.target.name] : e.target.value})
  }
  const handleImageChange =(e)=>{
    const file = e.target.files[0]
    if(file){
      const imageURL = URL.createObjectURL(file)
      setFormData({...formData,image:imageURL,file:file})
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
    const filteredMobiles = mobiles.filter((item,ind)=>{
      return item.id !== Number(id)
    })
    const concated = filteredMobiles.concat(formData)
    const sorted = concated.sort((a,b)=>a.id-b.id)
    setMobiles(sorted)
    navigate("/")
  }
  const handleDelete=(e)=>{
    e.preventDefault()
    setMobiles(mobiles.filter((mob)=>mob.id !== Number(id)))
    navigate("/")
  }
  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} name = "name" value={formData.name} className='form-control'/>
        <br/>
        <input type="text" onChange={handleChange} name="description" value={formData.description} className='form-control'/>
        <br/>
        <input type="number" onChange={handleChange} name="price" value={formData.price}/>
        <br/>
        <img src={formData.image} alt="Current Image" width="70"/>
      <input type="file" id="imageInput" accept="image/*" onChange={handleImageChange}/><br/><br/>
      <button type="submit" onClick={handleSubmit}>Save</button>
      <button type="submit" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
}

export default EditProduct;
