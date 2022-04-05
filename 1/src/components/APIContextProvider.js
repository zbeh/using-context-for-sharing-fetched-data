import { useState ,createContext } from "react"
export const APIContext = createContext({})
const APIContextProvider=({children})=>{
   const [users,setUsers] = useState([])
   return(
     <APIContext.Provider value={{users,setUsers}}>
         {children}
     </APIContext.Provider>
   )
}
export default APIContextProvider
