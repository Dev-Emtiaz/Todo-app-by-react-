import { UsersProvider } from "./UserContext"
import NewUsers from "./component/NewUsers"
import Users from "./component/Users"


function App() {


  return (
    <UsersProvider>
    <div className="w-full bg-cyan-500 h-screen flex items-center justify-center">
      <div className="w-[80%] flex flex-col gap-10">
        <NewUsers/>
      <Users/>

      </div>
    </div>
    </UsersProvider>
  )
}

export default App
