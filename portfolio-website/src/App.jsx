import styles from './App.module.css'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/MainProfile/profile'
import { About } from './components/About/about'
import {Experience} from './components/Experience/experience.jsx'

function App() {
  return (
    <div className='styles.App'>
      <NavBar />
      <Profile />
      <About />
      <Experience/>
    </div>
  )
}

export default App
