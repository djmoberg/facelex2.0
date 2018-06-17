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
            .withCredentials()
            .then((res) => {
                console.log(res)
                if (res.body.loggedIn)
                    this.setState({ isLoggedIn: true, name: res.body.username })
                else
                    this.setState({ isLoggedIn: false, activeTab: "chooseUser" })
            })
    }

    logOut() {
        request
            .get("http://localhost:3000/user/logout")
            .withCredentials()
            .then((res) => {
                window.location.reload()
            })
    }

    handleMenuClick = (name) => {
        if (name === "logOut")
            this.logOut()
        else {
            localStorage.setItem('activeTab', name)
            this.setState({ activeTab: name })
        }
    }

    handleNameChange = (name) => {
        localStorage.setItem('activeTab', "user")
        this.setState({ name, activeTab: "user" })
        this.isLoggedIn()
    }

    renderPage(name) {
        switch (name) {
            case "chooseUser":
                return <ChooseUser setName={this.handleNameChange} />
            case "user":
                return <User username={this.state.name} />
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
                <Menu activeTab={this.state.activeTab} onMenuClick={this.handleMenuClick} isLoggedIn={this.state.isLoggedIn} />
                <Segment>
                    {this.renderPage(this.state.activeTab)}
                </Segment>
            </div>
        );
    }
}

export default App;
