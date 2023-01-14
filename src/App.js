import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import "./App.css";

class App extends Component {
	state = {
		users: [],
		loading: false,
		alert: null,
		alertt: true,
	};

	// search the users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	// clear the users
	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	// set alert message
	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
	};

	changeAlertt = () => {
		this.setState({ alertt: false });
	};
	render() {
		console.log(this.state.alertt);
		const { users, loading } = this.state;
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<Alert alertt={this.state.alertt} />
					<Search
						searchUsers={this.searchUsers}
						clearUsers={this.clearUsers}
						showClear={users.length > 0 ? true : false}
						setAlert={this.setAlert}
						showAlert={this.state.alertt}
						changeAlertt={this.changeAlertt}
					/>
					<Users loading={loading} users={users} />
				</div>
			</div>
		);
	}
}
export default App;
