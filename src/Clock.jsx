import React , {useState } from "react";


const Clock = () =>{


  let time =  new Date().toLocaleTimeString();

  const [cTime , setCtime] = useState(time);
  

    let updateTime = () => {
      time =  new Date().toLocaleTimeString();
      setCtime(time);
    };

   
  setInterval(updateTime, 1000); // hm yha par interval lga diye ki har ek second par update hote rhe aur screen par dikhate rhe bina button par click kiye 



return (
<>
<div className="timeContainer">

<h1>{cTime}</h1>

</div>
</>
);


}


export default Clock;