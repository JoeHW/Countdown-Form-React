import React {Component} from 'react';
import './App.jsx';
import {Form, FormControl, Button} from 'react-bootstrap';

class Stopwatch extends Component {
 constructor(props){
   super(props);
   this.state = {
     stopTimer: 0,
     newTime: 0,
  }
 }

 startTimer = (time) => {
   this.setState(prevState => ({
     newTime: prevState.newTime - 1})
}


render() {
 return (
    <div className="stopwatch">
      <Form>
      <FormControl classNmae="stopwatchInput" placeholder="Enter Time" onChange={event => this.setState({this.state.newTime: event.target.value})} />
       <Button className="stopwatchButton" onClick={() => this.startTimer(this.state.newTime)}>Start Timer</Button>
      </Form>
    </div>

 )
}


}

export default Stopwatch
