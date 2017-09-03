import React from 'react';
import './App.css';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      deadline: 'November 27, 2017',
      newDeadline: "",
      newMinutes: '0',
      newSeconds: '0',
      minutes: '0',
      seconds: '0'
    }
  }

changeDeadline = () => {
  this.setState({deadline: this.state.newDeadline})
}

startTimer = () => {
  this.setState({minutes: this.state.newMinutes, seconds: this.state.newSeconds -1})
  console.log(this.state)
}

resetTimer = () => {
  this.setState({newMinutes: '0', newSeconds: '0', minutes: '0', seconds: '0'})
  console.log(this.state)
}



 render() {
   return (
    <div className='App'>
     <div className='App-title'>Countdown to {this.state.deadline}</div>
     <div>
      <Clock deadline={this.state.deadline} />
     </div>
     <Form inline>
     <FormControl className='deadlineInput' placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})} />
     <Button className="btn btn-success" onClick={() => this.changeDeadline()}>Submit</Button>
     <br />
     <br />
     </Form>
     <div className="stopwatch">
     <div>
     <Stopwatch minutes={this.state.minutes} seconds={this.state.seconds}  />
       <Form inline>
       <FormControl className="stopwatchInput" placeholder="Enter Minutes" onChange={event => this.setState({newMinutes: event.target.value})} />
       <FormControl className="stopwatchInput" placeholder="Enter Seconds" onChange={event => this.setState({newSeconds: event.target.value})} />
        <Button className="btn btn-danger" onClick={() => this.startTimer()}>Start Timer</Button>
        <Button className="btn btn-warning" onClick={() => this.resetTimer()}>Clear Timer</Button>
       </Form>
     </div>
     </div>
     </div>


  )
 }
}

export default App;
