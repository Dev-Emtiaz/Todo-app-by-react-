import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'

const NewUsers = () => {
    const [name, setName] = useState("");
    const {users, setUsers} = useContext(UserContext);
    const handleAdd = (e) =>{
        e.preventDefault();
        let newId = users.length>0 ? Math.max(...users.map((userId) => userId.id)) : 0;
       let newUsers = {
        id: newId +1,
        name: name
       }
       setUsers((prev) => [...prev, newUsers])
    }

  return (
    <>
    <div className='bg-white shadow-md rounded w-[100%] py-5'>
        <form action="#" className='w-[100%] flex flex-col gap-4 justify-center items-center'>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Add New Users'  className='w-[80%] px-5 py-4 bg-cyan-500 border border-white placeholder:text-white placeholder:font-bold font-bold text-white outline-none'/>
            <button onClick={handleAdd} className='text-white bg-black rounded px-10 py-3'>Add Users</button>
        </form>
    </div>
    </>
  )
}

export default NewUsers