import { useEffect, useRef, useState } from "react";
// Ví dụ về cách sử dụng useRef để lấy giá trị cũ
// video demo : https://www.youtube.com/watch?v=kp4fuB-0TBw
const Example1 = () =>{
    //1
    console.log("{} === {}",{} == {});
    const [count,setCount] = useState(0);
    const prevCount = useRef(count);
    console.log('Example1=======1 count',count);
    console.log('Example1=======1 prevCount',prevCount);
    //3
    useEffect(()=>{
        console.log('Example1=======3 count',count);
        prevCount.current = count;
        console.log('Example1=======3 prevCount',prevCount);
    },[count]);
    
    const handleIncreaseClick = () =>{
        console.log('Example1=======0 count old',count);
        console.log('Example1=======0');
        setCount(x=>x+1)
    }
    console.log('Example1=======2');
    // 2
    return (
        <div>
            <p>Previous: {prevCount.current}</p>
            <p>Current: {count}</p>
            <div>
                <button onClick = {handleIncreaseClick}>Increase</button>
            </div>
        </div>
    )
}
export default Example1;