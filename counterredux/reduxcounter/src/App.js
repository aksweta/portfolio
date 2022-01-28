import React from 'react';
import { useDispatch,useSelector } from 'react-redux';


const App =() => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state);
 console.log(counter)

   const increaseCount = () =>{
     dispatch ({
       type: "INCREASE_COUNT",
        })
      };

    const decreaseCount = () =>{
      dispatch ({
        type: "DECREASE_COUNT",
      })
    };  

return (
   <div>
  <h1>Counter:{counter.counter}</h1>
  <button onClick={()=> increaseCount()} >+</button>
  <button  onClick={()=> decreaseCount()}>-</button>
  </div>

);
}
export default App;