import React,{useState} from 'react'
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
    const [input,setInput]=useState("");
    const [todos, setTodos] = useState(["HTML","CSS","JavaScript"]);
    const [count,setCount]=useState(0);
    const [showTodos,setShowTodos]=useState([]);
  return (
    <div>
        <h2>React.useMemo</h2>
        <h1>My todos</h1>
        {showTodos.map((todo,index)=><p key={index}>{todo}</p>)}
        <button onClick={()=>setShowTodos(prev=>[...prev,"Add Todo"])}>Add Todos</button>
        
        <hr />
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <hr />
        <h1>Expensive Calculation</h1>
        <UseMemo number={count}/>
        <hr />
        <h1>React.memo</h1>
        <ReactMemo todos={todos} input={input} setInput={setInput} setTodos={setTodos}/>
    </div>
  )
}

export default App

