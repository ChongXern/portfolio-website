import styles from './App.module.css'
import { NavBar } from './components/NavBar/NavBar'
import { Profile } from './components/MainProfile/profile'
import { About } from './components/About/about'
import {Experience} from './components/Experience/experience.jsx'
import { Projects } from './components/Projects/projects.jsx'
import { Contacts } from './components/Contacts/contacts.jsx'

function App() {
  return (
    <div className='styles.App'>
      <NavBar />
      <Profile />
      <About />
      <Experience/>
      <Projects />
      <Contacts />
    </div>
  )
}

export default App
