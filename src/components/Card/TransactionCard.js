import React from 'react';
import './TransactionCard.css';

const TransactionCard=(data)=>{
    return(
        <div>
        <div className={`card ${data.data.direction===1? "right" :"left"} `}>
            <p className="date">{new Date(data.data.endDate).toDateString()}</p>
            <span className="amount">₹ {data.data.amount} <p className="accord-right"> {`>`} </p> </span> 
            {data.data.type===1 ? <p className="paid">✓ You paid</p> :<p className="paid">You Requested</p>}
            {data.data.type===2 && data.data.direction===2 ?<span> <button>PAY NOW</button> <button>REJECT</button></span>:""}
            {data.data.type===2 && data.data.direction===1 ?<span> <button>CANCEL</button></span>:""}
            <div className="">{data.data.type===1 ?  
            <>   
                <span className="font-8 left transNumber">Transaction ID</span>
                <p className="font-8 left ">{data.data.id}</p>
            </>:""}
            </div>
        </div>
        </div>
    )
}

export default TransactionCard;