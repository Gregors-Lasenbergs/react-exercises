import './App.css'
import NavBar from "./components/NavBar.tsx";
import {useRef} from "react";

function App() {
    const task1DivRef = useRef(null);
    function changeColor() {
        if (task1DivRef.current){
            if (task1DivRef.current.style.backgroundColor === "gold")
            {
                task1DivRef.current.style.backgroundColor = "gray";
            }
            else{
                task1DivRef.current.style.backgroundColor = "gold";
            }
        }
    }

    const task2DivRef = useRef(null);
    function cloneDiv() {
        if (task2DivRef.current) {
            const newDiv = task2DivRef.current.cloneNode(true);
            task2DivRef.current.after(newDiv);
        }
    }

    const task3DivRef = useRef(null);
    function sendDivToCorner() {
        // check if div is null
        if (task3DivRef.current === null) {
            return;
        }

        task3DivRef.current.style.position = "absolute";
        task3DivRef.current.style.right = "0";
        task3DivRef.current.style.top = "0";
        task3DivRef.current.innerHTML = "Esmu stūrī!";
    }

    return (
        <div className={"container"}>
            <NavBar/>
            {/*Task 1*/}
            <div ref={task1DivRef} className={"container_div-task-1"}>
            </div>
            <button className={"container_button-task-1"} onClick={changeColor}>Click Me</button>

            {/*Task 2*/}
            <div className={"container2"}>
                <div ref={task2DivRef} className={"container2_div-task-2"}>
                    clone me
                </div>
            </div>
            <button onClick={cloneDiv}>Clone</button>

            {/*Task 3*/}
            <div ref={task3DivRef} className={"container3_div-task-3"}>
            </div>
            <button onClick={sendDivToCorner}>Send to corner</button>
        </div>
    )
}

export default App
