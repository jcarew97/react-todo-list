import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
	state = {
		task: ''
	};

	handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	handleSubmit = (evt) => {
		evt.preventDefault();

		const newTodo = { ...this.state, id: uuid(), completed: false };
		this.props.addTodo(newTodo);

		this.setState({ task: '' });
	};

	render() {
		return (
			<form className="NewTodoForm" onSubmit={this.handleSubmit}>
				<label htmlFor="task" />
				<input type="text" id="task" name="task" value={this.state.task} onChange={this.handleChange} />
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
