import React from 'react'

const ReactMemo = React.memo(({todos,input,setInput,setTodos}) => {
  return (
    <div>
        <input type='text' placeholder='New Todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={()=>{
                    if(input.trim()!==""){
                        setTodos(prev=>[...prev,input]);
                        setInput("");
                    }else{
                        alert("Please enter a valid todo");
                    }
                }}>Add Todo</button>
                {todos.map((todo, index)=>(
                    <p key={index}>{todo}</p>
                ))}
    </div>
  )
})

export default ReactMemo