
import './App.css';

import Calendar from "./components/calendar/calendar"


function App() {
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    <div className="App">
     <Calendar months={months}    numberOfMonths={12} multiple={true}/>
    </div>
  );
}

export default App;
