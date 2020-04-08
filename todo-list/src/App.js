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
			case 'inProgress':
				setInProgress((inProgress) => [...inProgress, task]);
				break;
			case 'done':
				setDone((done) => [...done, task]);
				break;
		}
	};

	const removeTask = (task, index) => {
		switch (task.status) {
			case 'todo':
				const todoCopy = [...todo];
				todoCopy.splice(index, 1);
				setTodo(todoCopy);
				break;
			case 'inProgress':
				const inProgressCopy = [...inProgress];
				inProgressCopy.splice(index, 1);
				setInProgress(inProgressCopy);
				break;
			case 'done':
				const doneCopy = [...done];
				doneCopy.splice(index, 1);
				setDone(doneCopy);
				break;
		}
	};
	const moveTask = (action, task, index) => {
		switch (action) {
			case 'todo':
				removeTask(task, index);
				task.status = 'todo';
				setTodo((todo) => [...todo, task]);
				break;
			case 'inProgress':
				removeTask(task, index);
				task.status = 'inProgress';
				setInProgress((inProgress) => [...inProgress, task]);
				break;
			case 'done':
				removeTask(task, index);
				task.status = 'done';
				setDone((done) => [...done, task]);
				break;
		}
	};

	return (
		<div className="App">
			<TodoForm addNewTask={addNewTask} />

			<div class="columns">
				<div class="column">
					{' '}
					<h1>to do</h1>
					<TodoList tasks={todo} removeTask={removeTask} moveTask={moveTask} />
				</div>
				<div class="column">
					{' '}
					<h1>in progress</h1>
					<TodoList
						tasks={inProgress}
						removeTask={removeTask}
						moveTask={moveTask}
					/>
				</div>
				<div class="column">
					{' '}
					<h1>done</h1>
					<TodoList tasks={done} removeTask={removeTask} moveTask={moveTask} />
				</div>
			</div>
		</div>
	);
}

export default App;
