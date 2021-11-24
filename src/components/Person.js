import React from 'react';
import Image from './image/image-jeremy.png';



const Person = ({time, onClickDaily, onClickWeekly, onClickMonthly}) => {
    return (
     <div className = "card">
        <div className = "headerCard">
            <div className ="person"> 
                <img src = {Image} alt="Guy with a bright smile"/>
                <div> 
                    <p>Report for</p>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>
        </div>
        <div className = "lowerCard"> 
            <div>
            <a id="daily" onClick = {() => onClickDaily()}> Daily</a>   
            <a id="weekly" onClick = {() => onClickWeekly()}> Weekly</a>
            <a id="monthly" onClick = {() => onClickMonthly()}> Monthly</a>
            </div>
        </div>
            
    </div>
    )
}

export default Person
