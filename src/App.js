import MainDashboard from './Components/MainDashboard'
import StatusDashboard from './Components/StatusDashboard';
import './App.css';
import {Data} from './Data/Data'

function App() {
  return (
    <div className="App dark-mode" id="App">
      <div className='app-container'>
        <MainDashboard data={Data}/>
        <StatusDashboard data={Data}/>
      </div>

    </div>
  );
}

export default App;
