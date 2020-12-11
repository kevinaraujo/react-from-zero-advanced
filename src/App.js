import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';

function App() {

    const [tasks, setTasks] = useState([
        'Pagar a conta de luz',
        'Estudar React Hooks'
    ]);

    const [input, setInput] = useState('');

    useLayoutEffect(() => {
        const tasksStorage = localStorage.getItem('tasks');
        setTasks(JSON.parse(tasksStorage));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    const handleAdd = useCallback(() => {
        setTasks([
            ...tasks,
            input
        ]);
        setInput('');

    }, [tasks, input]);

    const totalTasks = useMemo(() => tasks.length, [tasks]);
    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task}>{task}</li>
                ))}
            </ul>
            <br/>
            <strong>Você tem {totalTasks} tarefas!</strong>
            <br/>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default App;