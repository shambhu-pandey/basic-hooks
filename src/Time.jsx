import React , {useState} from "react";


const Time = () =>{

let date = new Date();
let time = date.toLocaleTimeString();

const [cTime , setCtime] = useState(time);

  const getTime= ()  => {
    let date = new Date();
    let time = date.toLocaleTimeString();
   setCtime(time);
  }


  const currentTime =  new Date().toLocaleTimeString();

  const [exactTime , setExactTime] = useState(currentTime);
  



return (
<>
<div className="timeContainer">
<h1>{cTime}</h1>
<button className= "time_button" onClick = {getTime}>Get Time</button>


<h1>{currentTime}</h1>
</div>
</>
);


}


export default Time;