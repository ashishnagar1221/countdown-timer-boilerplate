import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  constructor(props){
      super(props)
      this.state = {
          count: 0
      }
  }

  resetfnc = () =>{
      this.setState({count: 0})
  }
    render() {
        const { count } = this.state;
        return (
            <div style={{ position: "relative" }}>
               { count !== 0 ? (
                   <h1><Clock timeInSeconds={count} resetCount = {this.resetfnc}/></h1>
                ):(
                    <h1>00:00</h1>
                  )}
                <CountdownForm 
                onSetCountdownTime={
                    value => count == 0 && this.setState({count:value})
                }/>
            </div>
        );
    }
}

export default Countdown;