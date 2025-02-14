
import React, {useState} from "react";
function Counter() {
 const [count,setcount]=useState(1)
  console.log(count)
  
  const increment=()=>{
    if (count<10){
    setcount(count+1)
    }
  };
  const decrement=()=>{
    if (count>1){
    setcount(count-1)
    }
  };  
  
    return (
      <>
        <div className='welcome-card'>
          <h2 >
            Counter!
          </h2>
          <p>
            Current Count: {count}<br></br>
              <button className="counter-button" onClick={increment} style={{backgroundColor:"Blue"}}>
                +  </button>
                &nbsp;
              <button className="counter-button" onClick={decrement} style={{backgroundColor:"Red"}}>
                 - </button>
              <br></br><br></br>
              <button onClick={() => setcount(1)} style={{backgroundColor:"White",color:"Black"}}>Reset</button>
              </p>
        </div>
        
      </>
    )
  }
  
  export default Counter
  