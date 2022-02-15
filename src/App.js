import banner from './assets/bg/bg3.jpg';
import bg1 from './assets/bg/bg4.jpg';
import logo from "./assets/foodyy-logo.png"
import './App.css';
import Public from './components/Public.js'


function App() {
  return (
    <div className="App">
      <Public banner={banner} bg1={bg1} logo={logo} />
    </div>
  );
}

export default App;
