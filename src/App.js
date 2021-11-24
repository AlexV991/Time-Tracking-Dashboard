import './style.css';
import { useState } from 'react';
import Person from './components/Person';
import Weekly from './components/Tasks/Weekly';
import Daily from './components/Tasks/Daily';
import Monthly from './components/Tasks/Monthly';

function App() {

  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);

function onClickDaily(){
setWeekly(false);
setMonthly(false);
setDaily(true);
document.getElementById("daily").style.opacity = "100%";
document.getElementById("weekly").style.opacity = "50%";
document.getElementById("monthly").style.opacity = "50%";
}

function onClickWeekly(){
  setWeekly(true);
  setMonthly(false);
  setDaily(false);
  document.getElementById("weekly").style.opacity = "100%";
  document.getElementById("daily").style.opacity = "50%";
  document.getElementById("monthly").style.opacity = "50%";
  }

function onClickMonthly(){
    setWeekly(false);
    setMonthly(true);
    setDaily(false);
    document.getElementById("monthly").style.opacity = "100%";
    document.getElementById("daily", "weekly").style.opacity = "50%";
    document.getElementById("weekly").style.opacity = "50%";
    }

  return (
    <div className="App">
      <Person onClickDaily ={onClickDaily} onClickMonthly = {onClickMonthly} onClickWeekly = {onClickWeekly}/>
      {weekly !== false && <Weekly /> }
      {monthly !== false && <Monthly />}
      {daily !== false && <Daily />}
    </div>
  );
}

export default App;
