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
		} else return <div className="App" />;
	}
}

export default App;
