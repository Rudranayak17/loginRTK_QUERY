import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Public from './component/Public'
import Login from './feature/auth/Login'
import Welcome from './feature/auth/Welcome'
import RequiredAuth from './feature/auth/RequiredAuth'
import UsersList from './feature/users/UserList'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequiredAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
          {/* <Route path="userslist" element={<UsersList />} /> */}
        </Route>

      </Route>
    </Routes>
  )
}

export default App;