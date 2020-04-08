import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
	const [todo, setTodo] = useState([]);
	const [inProgress, setInProgress] = useState([]);
	const [done, setDone] = useState([]);

	const addNewTask = (task) => {
		switch (task.status) {
			case 'todo':
				setTodo((todo) => [...todo, task]);
				break;
			case 'in progress':
				setInProgress((inProgress) => [...inProgress, task]);
				break;
			case 'done':
				setDone((done) => [...done, task]);
				break;
		}
	};

	return (
		<div className="App">
			<TodoForm addNewTask={addNewTask} />

			<h1>to do</h1>
			<TodoList tasks={todo} />

			<h1>in progress</h1>
			<TodoList tasks={inProgress} />

			<h1>done</h1>
			<TodoList tasks={done} />
		</div>
	);
}

export default App;
