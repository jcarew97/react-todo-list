import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	state = {
		isEditing: false,
		task: this.props.todo
	};

	handleRemove = () => {
		this.props.removeTodo(this.props.id);
	};

	toggleForm = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	handleUpdate = (evt) => {
		evt.preventDefault();
		//take new task data & pass up to parent
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({
			isEditing: false
		});
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleToggle = (evt) => {
		this.props.toggleTodo(this.props.id);
	};

	render() {
		//dependent on state, result is either the form for handling edits on a todo or the todo itself
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="Todo">
					<form className="Todo-edit-form" onSubmit={this.handleUpdate}>
						<input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="Todo">
					<li onClick={this.handleToggle} className={this.props.completed ? ' completed' : 'Todo-task'}>
						{this.props.todo}
					</li>
					<div className="Todo-buttons">
						<button onClick={this.handleRemove}>
							<i className="fas fa-trash" />
						</button>
						<button onClick={this.toggleForm}>
							<i class="fas fa-pen" />
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}

export default Todo;
