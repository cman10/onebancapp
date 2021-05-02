import './App.css';
import TransactionBody from './components/Body/TransactionBody';
import React from 'react';

class App extends React.Component {

state={
  data:null,
  loading: true,
  default:false
}
   async componentDidMount() {
    const api="https://dev.onebanc.ai/assignment.asmx/GetTransactionHistory?userId=1&recipientId=2"
    const response= await fetch(api);
    var data= await response.json();
    this.setState({data:data,loading:false,default:true})
  }
  
  render(){
  return (
    <div className="App">
     <TransactionBody loading={this.state.loading} userData={this.state.data} def={this.state.default}/>
    </div>
  );
}
}


export default App;
