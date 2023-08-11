import { Alert } from "reactstrap";
import React, { Component } from "react";
import { Table } from "reactstrap";
import FormComponent from "./FormComponent";

export default class UserListComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
		this.hide = this.hide.bind(this);
	}

	hide() {
		this.setState({ visible: false });
	}
	render() {
		return (
			<div className="container mt-5">
				<button
					className="btn btn-primary"
					onClick={() => this.setState({ visible: true })}
				>
					Add
				</button>
				<FormComponent
					visible={this.state.visible}
					hide={this.hide}
					addUser={this.props.addUser}
				/>
				{this.props.users.length > 0 ? (
					<Table striped>
						<thead>
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Username</th>
								<th>####</th>
							</tr>
						</thead>
						<tbody>
							{this.props.users.map((user) => (
								<tr key={user.id}>
									<th scope="row">{user.id}</th>
									<td>{user.firstName}</td>
									<td>{user.lastName}</td>
									<td>{user.username}</td>
									<td>
										<button className="btn btn-warning">Edit</button> &nbsp;
										<button className="btn btn-danger">Delete</button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<Alert color="danger">There is no user</Alert>
				)}
			</div>
		);
	}
}
