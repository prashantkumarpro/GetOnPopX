import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import CreateAccount from './components/CreateAccount '
import ProtectedRoute from './components/ProtectedRoute'
import Root from './Root'

function App () {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Root />}>
            <Route path='/login' element={<Login />} />
            <Route index element={<Home />} />
            <Route path='/create' element={<CreateAccount />} />
            <Route
              path='/profile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
