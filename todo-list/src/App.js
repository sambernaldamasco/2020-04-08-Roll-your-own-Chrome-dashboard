import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
	const testTodos = [
		{ title: 'testest', description: 'one test', priority: 'medium' },
		{ title: 'testest', description: 'two test', priority: 'medium' },
	];
	return (
		<div className="App">
			<TodoForm />
			<TodoList tasks={testTodos} />
		</div>
	);
}

export default App;
