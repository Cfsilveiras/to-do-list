"use client";

import React, { useState } from "react";
import TodoItem from "./Todoitem";

export default function TodoList() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState("");

    const AddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([ ...tasks, newTask]);
            setNewTask("");
        }
    };

    const removeTask = (index: number) => {
        setTasks (tasks.filter((_, i) => i !== index));
    };

    return(
        <div className="todo-container">

            {/* Menu-section */}
            <h1 className="Title">PROJECT <br></br> To-do List</h1>
            <div className="input-container">
            <input className="input"
                type="text"
                placeholder="What do you need to do?"
                value={newTask}
                maxLength={60}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="button" onClick={AddTask}>New task?</button>
           </div>
        <ul className="todo-list">
            {tasks.map((task, index) => (
                <TodoItem key={index} task={task} onDelete={() => removeTask(index)} />
            ))}
        </ul>
        <div className="footer">
            <p>Made with love, and, learned with GPT and Descomplica University <br></br> by <span><a className="linkgit" href="https://github.com/Cfsilveiras/" target="_blank" rel="noopener noreferrer">DevSilveira</a></span></p>
        </div>
        </div>
    );}