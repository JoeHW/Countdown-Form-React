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

 componentDidMount = () => setInterval(() => this.setTime(this.props.seconds), 1000);

setTime = (secs) => {
this.setState({seconds: this.props.seconds -1})
}

render() {
 return (
    <div>
    <div className='stopwatch-seconds'>{this.props.seconds} seconds</div>
    <br/>
    <div className='stopwatch-time'>{this.props.seconds}</div>
    </div>
 )
}


}

export default Stopwatch
