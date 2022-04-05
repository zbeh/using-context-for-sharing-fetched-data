import React, { useContext } from 'react'
import { APIContext } from './APIContextProvider'
export default function SelectedItems() {
 const{users}=useContext(APIContext)
  return (
       <div className='wrapper-1'>
          <h3>Selected Items</h3> 
          {users?.map(item=><p>{item.name}</p>)}
        </div>  
    )
}
