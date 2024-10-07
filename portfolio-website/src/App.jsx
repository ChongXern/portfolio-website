import styles from './App.module.css'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/MainProfile/profile'
import { About } from './components/About/about'

function App() {
  return (
    <div className='styles.App'>
      <NavBar />
      <Profile />
      <About />
    </div>
  )
}

export default App
