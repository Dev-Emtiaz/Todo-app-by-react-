import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import User from './User';

const Users = () => {
    const {users} = useContext(UserContext);
  
  return (
   <div className='grid grid-cols-4 gap-3'>
   {
    users.map((user) =>(
        <User user={user}/>
    ))
   }
   </div>
  )
}

export default Users