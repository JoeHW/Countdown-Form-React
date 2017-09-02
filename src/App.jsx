import React from 'react';
import './App.css';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';

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
      <Clock deadline={this.state.deadline} />
     </div>
     <Form inline>
     <FormControl className='deadlineInput' placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})} />
     <Button className="btn btn-success" onClick={() => this.changeDeadline()}>Submit</Button>
     </Form>
     </div>

  )
 }
}

export default App;
