import './App.css';
import React, { Component } from 'react';
import Buttonz from './style/Buttonz';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false
		};
	}

	render() {
		var { isLoaded, items } = this.state; // accessing the above variables.
		if (!isLoaded) {
			return (
				<div>
					<Buttonz />
				</div>
			);
		} else
			return (
				<div className="App">
					{/* Is this working?
					<ul>
						{items.map((item) => (
							<li key={item.id}>
								Name: {item.name} , email : {item.email}, username: {' '}
								{item.username}
								street:{item.suite}
							</li>
						))};
					</ul> */}
				</div>
			);
	}
}

export default App;
