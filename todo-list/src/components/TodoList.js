import React, { useState } from 'react';

const TodoList = (props) => {
	return (
		<>
			{props.tasks.map((task, index) => {
				return (
					<div key={index}>
						<h2> {task.title}</h2>
						<p> {task.description}</p>
						<h4> {task.priority}</h4>
						<button onClick={() => props.removeTask(task, index)}>
							{' '}
							remove task{' '}
						</button>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
