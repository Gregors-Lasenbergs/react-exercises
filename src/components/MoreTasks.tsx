import NavBar from "./NavBar.tsx";
import React, {useEffect} from "react";
import './MoreTasks.css';

function MoreTasks(){
    useEffect(() => {
        console.log('First Render');
    }, []);
    
    useEffect(() => {
        console.log('Render');
    });
    
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        console.log('Changing count');
    }, [count]);
    
    function increment() {
        setCount(count + 1);
    }

    const [count2, setCount2] = React.useState(0);
    useEffect(() => {
        setCount2(100)
    }, []);
    
    const task6Ref = React.useRef(null);
    
    useEffect(() => {
        if (task6Ref.current !== null) {
            const currentFontSize = parseInt(window.getComputedStyle(task6Ref.current).fontSize);
            task6Ref.current.style.fontSize = `${currentFontSize + 1}px`;
        }
    }, [count2]);
    
    function increment2() {
        setCount2(count2 + 1);
    }
    
    function changeText() {
        const input:HTMLInputElement = document.querySelector(".task5Input");
        const task5div = document.querySelector(".task5");
        if (task5div === null || input === null) {
            return;
        }
        task5div.innerHTML = input.value;
    }
    
    function changeText2() {
        const input:HTMLInputElement = document.querySelector(".task7Input");
        const task7div = document.querySelector(".task7");
        if (task7div === null || input === null) {
            return;
        }
        task7div.innerHTML = input.value;
        document.title = input.value;
    }
    
    return (
        <div className={"container"}>
            <NavBar/>
            
            {/*Task 4*/}
            <div className={"row"}>
                <button onClick={increment}>+</button>
                Poga palielina count par 1
            </div>
            <div>Count: {count}</div>
            
            {/*Task 5*/}
            <div className={"row"}>
                <input type={"text"} onChange={changeText} className={"task5Input"}/>
                OnChange apakšā mainās teksts reizē ar rakstīšanu
            </div>
            <div className={"task5"}></div>
            
            {/*Task 6*/}
            <div className={"row"}>
                <button onClick={increment2}>+</button>
                Poga palielina count2 par 1
            </div>
            <div ref={task6Ref}>Count: {count2}</div>
            
            {/*Task 7*/}
            <div className={"row"}>
                <input type={"text"} onChange={changeText2} className={"task7Input"}/>
                OnChange apakšā mainās teksts reizē ar rakstīšanu
            </div>
            <div className={"task7"}></div>
        </div>
    );
}

export default MoreTasks;