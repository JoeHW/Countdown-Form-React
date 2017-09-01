import React from 'react';
import './App.css';

class App extends React.Component {
 render() {
   return (
    <div className='App'>
     <div className='App-title'>Countdown to December 25 2017</div>
     <div>
      <div className='clock-days'>14 Days</div>
      <div className='clock-hours'>23 Hours</div>
      <div className='clock-minutes'>56 Minutes</div>
      <div className='clock-seconds'>09 Seconds</div>
     </div>
     <div>
     <input placeholder='new date'/>
     <button>Submit</button>
     </div>
     </div>

  )
 }
}

export default App;
