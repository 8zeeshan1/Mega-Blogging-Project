import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import auth from './appwrite/appwite'
import { login, logout } from './store/slices'
import './App.css'
import { useDispatch } from 'react-redux'
import { Footer, Header } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}));
        }
        else {
          dispatch(logout())
        }
      })
      .finally(()=> setLoading(false))
    }, [])

  return loading? (
    <>
      <div>
        <Header/>
        pata nhi kya hai
        <Footer/>
      </div>
    </>
  ): null
}

export default App
