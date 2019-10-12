import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
	state = {
		todos: []
	};

	addTodo = (todo) => {
		this.setState((st) => ({
			todos: [ ...st.todos, todo ]
		}));
	};

	removeTodo = (id) => {
		this.setState({
			todos: this.state.todos.filter((todo) => {
				return todo.id !== id;
			})
		});
	};

	updateTodo = (id, newTask) => {
		//updatedTodos is new array of todos for state, we map over the todos and if an id matches the id passed into the function we return that todo with the task changed to newTask
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: newTask };
			}
			return todo;
		});
		this.setState({
			todos: updatedTodos
		});
	};

	toggleCompletion = (id) => {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({
			todos: updatedTodos
		});
	};

	render() {
		const todos = this.state.todos.map((todo) => {
			return (
				<Todo
					key={todo.id}
					id={todo.id}
					todo={todo.task}
					completed={todo.completed}
					removeTodo={this.removeTodo}
					updateTodo={this.updateTodo}
					toggleTodo={this.toggleCompletion}
				/>
			);
		});
		return (
			<div className="TodoList">
				<h1>React Todo List</h1>
				<ul>{todos}</ul>

				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}
}

export default TodoList;
