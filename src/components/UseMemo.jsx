import React,{useMemo} from 'react'
function expensiveCalculation(num) {
    console.log("Calculating the expensive calculation.....");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
        total += i;
    }
    return total;
}

const UseMemo = ({ number }) => {
    const expensiveResult = React.useMemo(()=>expensiveCalculation(number), [number]);
  return (
    <div>
        {expensiveResult}
    </div>
  )
}

export default UseMemo