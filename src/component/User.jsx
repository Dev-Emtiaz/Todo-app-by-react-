import React, { useContext } from 'react'
import { UserContext } from '../UserContext';

const User = ({user}) => {
    const {users, setUsers} = useContext(UserContext)
    const {id} = user;
    const handleDelet = () =>{
        const filterId = users.filter((userId) => userId.id !== id);
        setUsers(filterId);
    }
  return (
  <>
  <div className='bg-white shadow-md rounded px-10 py-3'>
    <p>{user.id}</p>
    <h1>{user.name}</h1>
    <button onClick={handleDelet} className='bg-red-500 text-white rounded shadow-md px-10 py-3 mt-3'>Delet</button>
  </div>
  </>
  )
}

export default User