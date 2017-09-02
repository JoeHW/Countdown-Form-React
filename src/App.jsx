import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'November 27, 2017',
      newDeadline: ""
    }
  }

changeDeadline = () => {
  this.setState({deadline: this.state.newDeadline})
}

 render() {
   return (
    <div className='App'>
     <div className='App-title'>Countdown to {this.state.deadline}</div>
     <div>
      <div className='clock-days'>14 Days</div>
      <div className='clock-hours'>23 Hours</div>
      <div className='clock-minutes'>56 Minutes</div>
      <div className='clock-seconds'>09 Seconds</div>
     </div>
     <div>
     <input placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})} />
     <button onClick={() => this.changeDeadline()}>Submit</button>
     </div>
     </div>

  )
 }
}

export default App;
