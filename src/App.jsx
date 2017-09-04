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
      newSeconds: "",
      seconds: "30"
    }
  }

changeDeadline = () => {
  this.setState({deadline: this.state.newDeadline})
}

startTimer = () => {
  this.setState({seconds: this.state.newSeconds})
  console.log(this.state)
}

resetTimer = () => {
  this.setState({newSeconds: '0', seconds: '0'})
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
     <FormControl className='deadlineInput' placeholder='New Date' onChange={event => this.setState({newDeadline: event.target.value})} />
     <Button className="btn btn-primary" onClick={() => this.changeDeadline()}>Submit</Button>
     <br />
     <br />
     </Form>
     <div className='App-stopwatch'>Stopwatch</div>
     <div className="stopwatch">
     <div>
     <Stopwatch seconds={this.state.seconds}  />
       <Form inline>
       <FormControl className="stopwatchInput" placeholder="Enter Seconds" onChange={event => this.setState({newSeconds: event.target.value})} />
         </Form>
        <Button className="btn btn-primary" onClick={() => this.startTimer()}>Start Timer</Button>
        <Button className="btn btn-basic" onClick={() => this.resetTimer()}>Clear Timer</Button>

     </div>
     </div>
     </div>


  )
 }
}

export default App;
