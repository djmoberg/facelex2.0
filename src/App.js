import React, { Component } from 'react';
import Menu from './Menu'
import Overview from './pages/Overview'
import ChooseUser from './pages/ChooseUser'
import User from './pages/User'

import { Segment } from 'semantic-ui-react'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeTab: "chooseUser"
		}
	}

	componentDidMount() {
		const activeTab = localStorage.getItem('activeTab')
		if (activeTab)
        	this.setState({activeTab: activeTab})
    }

	handleMenuClick = (name) => {
		localStorage.setItem('activeTab', name)
		this.setState({ activeTab: name })
	}

	renderPage(name) {
		switch (name) {
			case "chooseUser":
				return <ChooseUser />
			case "user":
				return <User />
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
