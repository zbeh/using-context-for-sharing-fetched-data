import React, { useEffect, useState, } from 'react'
import List from './List';
export default function AllItems() {
    const [data,setData]=useState('')
    useEffect(()=>{
        fetch('https://61f6a8042e1d7e0017fd6e8f.mockapi.io/db')
        .then(response=>response.json())
        .then(res=>setData(res))
    },[])
    console.log(data);
  return (
    <div className='wrapper'>
        <h3>All Items</h3>
        {data && data.length>0 && data.map((i,index)=> <List key={index} item={i} />)}
    </div>
  )
}
