import React from 'react';
import  './Header.css'

const Header=()=>{
    return(
        <div className="col-sm-12 zero" >
            <div className="col-sm-3">
            <p className="icon-left align-left">←</p>
            <span className="circle align-left">J</span>
            </div>
            <div>
            <span className="userDetails align-left padding-10 font-15 ">John Wick</span>
            <p  className="userContact align-left font-12">+91 989999999</p>
            <div className="header"> </div>
            </div>
            
        </div>
    
        
    )
}

export default Header;