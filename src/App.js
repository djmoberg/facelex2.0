import React, { Component } from 'react';
import Menu from './Menu'
import Overview from './pages/Overview'
import ChooseUser from './pages/ChooseUser'
import User from './pages/User'

import { Segment } from 'semantic-ui-react'

const request = require('superagent');

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: "chooseUser",
            name: "",
            isLoggedIn: false
        }
    }

    componentDidMount() {
        const activeTab = localStorage.getItem('activeTab')
        if (activeTab)
            this.setState({ activeTab: activeTab })

        this.isLoggedIn()
    }

    isLoggedIn() {
        request
            .get("http://localhost:3000/user/loggedIn")
            // .withCredentials()
            .then((res) => {
                console.log(res.text)
            })
    }

    handleMenuClick = (name) => {
        localStorage.setItem('activeTab', name)
        this.setState({ activeTab: name })
    }

    handleNameChange = (name) => {
        this.setState({ name })
        this.isLoggedIn()
    }

    renderPage(name) {
        switch (name) {
            case "chooseUser":
                return <ChooseUser setName={this.handleNameChange} />
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
                <p>{this.state.name} {this.state.isLoggedIn ? "true" : "false"}</p>
                <Menu activeTab={this.state.activeTab} onMenuClick={this.handleMenuClick} />
                <Segment>
                    {this.renderPage(this.state.activeTab)}
                </Segment>
            </div>
        );
    }
}

export default App;
