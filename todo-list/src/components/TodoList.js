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
							remove task
						</button>

						{task.status === 'todo' ? (
							<button onClick={() => props.moveTask('inProgress', task, index)}>
								{' '}
								In Progress{' '}
							</button>
						) : null}

						{task.status === 'inProgress' ? (
							<button onClick={() => props.moveTask('done', task, index)}>
								{' '}
								done{' '}
							</button>
						) : null}
					</div>
				);
			})}
		</>
	);
};

export default TodoList;
