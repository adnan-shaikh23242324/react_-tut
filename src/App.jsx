// import logo from './logo.svg';
import Header from './Header.jsx';
import { useState,React, createContext, useMemo, useCallback } from 'react';
import { useRef } from 'react';
import ChildA from './ChildA.jsx';

//contextAPi?
// useCallback
// const data = createContext();

function App() {

  // usestate hook with object

  const [allValues,setValues] = useState({firstName:"Adnan",lastName:"Shaikh"})

  function update(){
    setValues({...allValues,firstName:"Addu"})
  }

  //map function

  // const IPL = ["CSK","MI","RCB"]
  // const result = IPL.map((ipl)=><h1>{ipl}</h1>)

  // const [name,setName]=useState("");
  // function handleChange(e){
  //   console.log(e.target.value);
  //   setName(e.target.value)

  // }
//   const [add,setAdd]= useState(0);
//   const [count,setCount]= useState(0);

//   const Learning =useCallback( ()=>{
//     //some operation
//   },[count])
  //useMemo
  // const [minus,setMinus]=useState(100);

  // const mutiplication=useMemo
  // function multiply(){
  //   return add*10;

  // }
  //context hook
  // const name="Adnan"

  // useRef
  // const refElement = useRef("");
  // const [name,setName] = useState("Adnan")
  // console.log(refElement);
  // function Reset(){
  //   setName("")
  //   refElement.current.focus()
  // }
  // function handleInput(){
  //   refElement.current.style.color="blue"
  // }
  //usestate 
  // const [count,setCounter] = useState(0)
  // function updateCount(){
  //   setCounter(count+1);
  // }
  return (
    <div className='app'>
      <h1>First name is {allValues.firstName} Last Name is {allValues.lastName}</h1>
      <button onClick={update}>Update</button>
      {/* <h1>{result}</h1>

      {IPL[0]}<br/>
      {IPL[1]}<br/>
      {IPL[2]} */}
    
    {/* <form className='App'>
    <label>First name:</label><br/>
    <input type="text" value={name} onChange={handleChange} /><br/>

    </form> */}
  </div>
  );
}


export default App;
  {/* <h1>Learning useCallback</h1>
  <ChildA Learning={Learning} count={count}/> 
  <h1>{add}</h1>
  <button onClick={()=>setAdd(add+1)}>Addition</button>
  <h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>Count</button> */}


{/* //context hook */}
{/* <data.Provider value={name}>
<ChildA />
</data.Provider> */}
{/* //useRef */}
{/* <h1>Leanring useRef</h1>
<input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
<button onClick={Reset}>Reset</button>
<button onClick={handleInput}> Handle Input</button>
//usestate
<h1>Button Clicked {count} times</h1>
<button onClick={updateCount}>Click Me</button> */}