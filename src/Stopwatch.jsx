import React, {Component} from 'react';
import './App.jsx';


class Stopwatch extends Component {
 constructor(props){
   super(props);
   this.state = {
     seconds: this.props.seconds,
     newSecs: ""
}
}

 componentWillMount = () => this.setTime(this.props.seconds);

 componentDidMount = () => setInterval(() => this.setTimeAgain(this.state.newSecs), 1000);

setTime = (secs) => {
if(this.state.seconds > 0){
this.setState({newSecs: this.props.seconds -1})
console.log(this.state);
}}

setTimeAgain = (secs) => {
if(this.state.newSecs > 0){
this.setState({newSecs: this.state.newSecs -1})
console.log(this.state);
}}

render() {
 return (
    <div>
    <div className='stopwatch-seconds'>{this.props.seconds} seconds</div>
    <br/>
    <div className='stopwatch-time'>{this.state.newSecs}</div>
    </div>
 )
}


}

export default Stopwatch
