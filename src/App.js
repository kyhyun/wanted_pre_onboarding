import styles from "./App.module.css";
import "./reset.css";
import Toggle from "./components/toggle/Toggle";
import Tab from "./components/tab/Tab";
function App() {
  return (
    <div className={styles.App}>
      <Toggle />
      <Tab />
    </div>
  );
}

export default App;
