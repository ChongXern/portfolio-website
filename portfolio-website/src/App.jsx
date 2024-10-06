import styles from './App.module.css'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/MainProfile/profile'

function App() {
  return (
    <div className='styles.App'>
      <NavBar />
      <Profile />
    </div>
  )
}

export default App
