import React, {Component} from 'react';
import './App.jsx';


class Stopwatch extends Component {
 constructor(props){
   super(props);
   this.state = {
     seconds: this.props.seconds

  }
 }

 componentWillMount = () => this.setTime(this.props.seconds);

 componentDidMount = () => setInterval(() => this.setTime(this.state.seconds), 1000);

setTime = (secs) => {
  if(this.state.seconds > 0){
const seconds = secs -1;
this.setState({seconds})
}}

render() {
 return (
    <div>
    <div className='stopwatch-seconds'>{this.props.seconds} seconds</div>
    <br/>
    <div className='stopwatch-time'>{this.state.seconds}</div>
    </div>
 )
}


}

export default Stopwatch
