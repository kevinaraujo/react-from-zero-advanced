import React, { useState, useEffect } from 'react';

function App() {

    const [tasks, setTasks] = useState([
        'Pagar a conta de luz',
        'Estudar React Hooks'
    ]);

    const [input, setInput] = useState('');

    useEffect(() => {
        const tasksStorage = localStorage.getItem('tasks');
        setTasks(JSON.parse(tasksStorage));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    function handleAdd() {
        setTasks([
            ...tasks,
            input
        ]);
        setInput('');
    }

    

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default App;