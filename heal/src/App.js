import './App.css';
import './App-mobileM.css';
import Heal from './res/main';
import HealMoblie from './res/mainMobileM';
import { isMobile } from 'react-device-detect';

function App() {
  return <div className="App">{isMobile ? <HealMoblie /> : <Heal />}</div>;
}

export default App;
