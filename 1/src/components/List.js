import React, {useContext} from 'react'
import { APIContext} from './APIContextProvider';
import PropTypes from 'prop-types'
export default function List(props) {
  const{item}=props
  const { users,setUsers } = useContext(APIContext);
  const handleChange=(e)=>{
        if(e.target.checked){
          setUsers([...users,{name:item.name,id:item.id}])
        } else{
            setUsers(users.filter((person)=>person.id!==item.id))
        }
    }
  console.log(users);
  return ( 
        <>
        
          <input type="checkbox" value={users} key={item.id} onChange={handleChange}/>
          <label key={item.name}>{item.name}</label>
          <br/>
       </>
       
    )

}
List.propTypes = {
    item: PropTypes.object
}