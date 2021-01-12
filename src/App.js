// quering data from an API

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

	// anattempt to load an API
	componentDidMount() {
		fetch('https://api.qr-code-generator.com/v1/create/') // api or data source
			.then((res) => res.json()) // convertes the data to json
			.then((json) => {
				this.setState({
					isLoaded: true,
					items: json
				});
			});
	}

	render() {
		var { isLoaded, items } = this.state; // accessing the above variables.

		if (!isLoaded) {
			return (
				<div>
					<Buttonz />
					{/* <h1>The Vcard application </h1>
					This is the vcard app and it is Loading ... */}
				</div>
			);
		} else
			// if (!items){
			//   return<div>Empty</div>
			// }
			return (
				<div className="App">
					Is this working?
					<ul>
						{items.map((item) => (
							<li key={item.id}>
								Name: {item.name} , email : {item.email} username:{' '}
								{item.username}
								street:{item.suite}
							</li>
						))};
					</ul>
				</div>
			);
	}
}

export default App;
