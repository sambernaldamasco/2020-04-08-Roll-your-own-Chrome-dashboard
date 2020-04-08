import React, { useState } from 'react';

const TodoForm = (props) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');
	const [priority, setPriority] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const task = {
			title: title,
			description: description,
			status: status,
			priority: priority,
		};

		console.log(task);
		props.addNewTask(task);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label class="label">
						title:
						<div className="control">
							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								className="input"
							/>
						</div>
					</label>
				</div>

				<label>
					description:
					<input
						type="text"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</label>

				<label>
					status:
					<select value={status} onChange={(e) => setStatus(e.target.value)}>
						<option> ------------ </option>
						<option value="todo"> to do </option>
						<option value="inProgress"> in progress </option>
						<option value="done"> done </option>
					</select>
				</label>

				<label>
					priority:
					<select
						value={priority}
						onChange={(e) => setPriority(e.target.value)}
					>
						<option> ------------ </option>
						<option value="low"> low </option>
						<option value="medium"> medium </option>
						<option value="high"> high </option>
					</select>
				</label>

				<input type="submit" value="add new" />
			</form>
		</div>
	);
};

export default TodoForm;
