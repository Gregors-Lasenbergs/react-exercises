import NavBar from "./NavBar.tsx";
import {useEffect} from "react";

function EvenMoreTasks() {
    
    let count = 0;
    function changeCount() {
        const countDiv = document.querySelector(".countDiv");
        const task9Div = document.querySelector(".task9Div");
        count++;
        
        if (countDiv === null || task9Div === null) {
            return;
        }
        countDiv.innerHTML = `Count: ${count}`;
        task9Div.innerHTML = `${count*2}`;
    }
    
    useEffect(() => {
        const countButton: HTMLButtonElement = document.querySelector(".countButton");
        if (countButton === null) {
            return;
        }
        countButton.disabled = true;
        setTimeout(() => {
            countButton.disabled = false;
        }, 5000);
    }, []);
    
    function addColoredDiv() {
        const task10Div = document.querySelector(".task10Div");
        const task10Select = document.querySelector(".task10Select");
        if (task10Div === null || task10Select === null) {
            return;
        }
        const newDiv = document.createElement("div");
        newDiv.style.backgroundColor = task10Select.value;
        newDiv.style.width = '50px';
        newDiv.style.height = '50px';
        task10Div.appendChild(newDiv);
    }
    
    useEffect(() => {
        const task8Input1: HTMLInputElement = document.querySelector(".task8Input1");
        if (task8Input1 === null) {
            return;
        }
        task8Input1.focus();
    }, []);
    
    function addInputsToDivText() {
        const task8Input1: HTMLInputElement = document.querySelector(".task8Input1");
        const task8Input2: HTMLInputElement = document.querySelector(".task8Input2");
        const task8Div: HTMLDivElement = document.querySelector(".task8Div");
        if (task8Input1 === null || task8Input2 === null || task8Div === null) {
            return;
        }
        task8Div.innerHTML += `${task8Input1.value} ${task8Input2.value} `;
        task8Input1.focus();
        task8Input1.value = "";
        task8Input2.value = "";
    }
    
    return (
        <div className={"container"}>
            <NavBar/>
            <input className={"task8Input1"} type={"text"}></input>
            <div className={"row"}>
                <input className={"task8Input2"} type={"text"}></input>
                <button onClick={addInputsToDivText} >Submit</button>
            </div>
            <div className={"task8Div row"}></div>
            <button className={"countButton"} onClick={changeCount}>Poga</button>
            <div className={"countDiv"}>Count: {count}</div>
            <div className={"task9Div"}>
            </div>
            <div className={"row"}>
                <button onClick={addColoredDiv}>+</button>
                <select className={"task10Select"}>
                    <option>red</option>
                    <option>green</option>
                    <option>blue</option>
                    <option>yellow</option>
                </select>
            </div>
            <div className={"task10Div row"}></div>

        </div>
    );
}

export default EvenMoreTasks;