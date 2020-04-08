import React, { useState } from 'react';

const TodoList = (props) => {
	return (
		<>
			{props.tasks.map((task) => {
				return (
					<div>
						<h2> {task.title}</h2>
						<p> {task.description}</p>
						<h4> {task.priority}</h4>
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
