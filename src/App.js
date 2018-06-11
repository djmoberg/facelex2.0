import React, { Component } from 'react';
import Menu from './Menu'
import Overview from './pages/Overview'

import { Segment } from 'semantic-ui-react'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeTab: "chooseUser"
		}
	}

	handleMenuClick = (name) => {
		this.setState({ activeTab: name })
	}

	renderPage(name) {
		switch (name) {
			case "chooseUser":
				break;
			case "user":
				break;
			case "overview":
				return <Overview />
			default:
				break;
		}
	}

	render() {
		return (
			<div className="App">
				<h1 style={{ textAlign: "center" }} >Facelex2.0</h1>
				<Menu activeTab={this.state.activeTab} onMenuClick={this.handleMenuClick} />
				<Segment>
					{this.renderPage(this.state.activeTab)}
				</Segment>
			</div>
		);
	}
}

export default App;