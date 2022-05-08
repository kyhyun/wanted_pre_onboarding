import styles from './App.module.css'
import './reset.css'
import Toggle from './components/toggle/Toggle'
import Tab from './components/tab/Tab'
import Slider from './components/slider/Slider'
import Input from './components/input/Input'
import DropDown from './components/dropDown/DropDown'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <DropDown />
    </div>
  )
}

export default App
