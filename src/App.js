import styles from "./App.module.css";
import "./reset.css";
import Toggle from "./components/toggle/Toggle";
import Tab from "./components/tab/Tab";
import Slider from "./components/slider/Slider";
function App() {
  return (
    <div className={styles.App}>
      <Toggle />
      <Tab />
      <Slider />
    </div>
  );
}

export default App;
