import React ,  {useState} from "react";
import './index.css'


const Count = () =>{


const State = useState(); 

// const [currentvalue , updateValue] = useState(initialValue);

const [count , setCount] = useState(0);

  const increase_num =  ()  =>{
   if(count<20){
   setCount( count+2);
   }
  }

  const decrease_num =  ()  =>{
    if(count>0) {
      setCount( count-1);
    }
   }

  

return(
<>
<div className="container">
<h1>{count}</h1>
<button className="Count_button" onClick={increase_num}>Click Me To Increase</button>

<hr />
<h1>{count}</h1>
<button className="Count_button" onClick={decrease_num}>Click Me To Decrease</button>


</div>


</>
);
}


export default Count;