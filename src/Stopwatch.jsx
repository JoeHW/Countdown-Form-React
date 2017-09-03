import React, {Component} from 'react';
import './App.jsx';


class Stopwatch extends Component {
 constructor(props){
   super(props);
   this.state = {
     minutes: this.props.minutes,
     seconds: this.props.seconds
  }
 }

 componentWillMount = () => this.setTime();

 componentDidMount = () => setInterval(() => this.setTime(), 1000);

setTime = () => {
  if(this.state.seconds > 0){
  const minutes = this.state.minutes;
  const seconds = this.state.seconds -1


 this.setState({minutes, seconds})
 }
}

render() {
 return (
    <div>
    <div className='stopwatch-minutes'>{this.state.minutes} minutes</div>
    <div className='stopwatch-seconds'>{this.state.seconds} seconds</div>
    </div>
 )
}


}

export default Stopwatch
