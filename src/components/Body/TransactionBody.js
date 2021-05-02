import React from 'react';
import TransactionCard from '../Card/TransactionCard';
import Header from '../Header/Header';
import './TransactionBody.css'
import Spinner from '../Spinner/Spinner';

class TransactionBody extends React.Component{
  
  render(){
    return(
      <div>
        { this.props.loading ? <Spinner/>:
      (
      <div>
      <Header/>
      {this.props.userData.transactions.map(item=> <TransactionCard data={item}  key={item.id}/>)}
      </div>
      )}
        </div>
    )}
  }

export default TransactionBody;