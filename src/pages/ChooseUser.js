import React, { Component } from 'react';

import { Form, Message } from 'semantic-ui-react'

const request = require('superagent');

export default class ChooseUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: "",
            error: false
        }
    }

    checkLoginInformation() {
        request.post(process.env.REACT_APP_BACKEND + "user/login")
            .send({ username: this.state.name, password: this.state.password })
            .withCredentials()
            .on('error', (err) => {
                if (err.status === 401)
                    this.setState({ error: true, password: "" })
            })
            .then((res) => {
                this.setState({ password: "" })
                if (res.text === "Logged in") {
                    this.props.setName(this.state.name)
                }
                console.log(res.text)
            })
    }

    render() {
        return (
            <div style={{ maxWidth: "300px" }} >
                <h2>Venligst velg en bruker</h2>
                <Form error={this.state.error} >
                    <Form.Input
                        type="text"
                        label='Brukernavn'
                        placeholder="Bruker"
                        value={this.state.name}
                        onChange={(_, { value }) => this.setState({ name: value })}
                        onFocus={() => this.setState({ error: false })}
                    />
                    <Form.Input
                        type="password"
                        label="Passord"
                        placeholder="Passord"
                        value={this.state.password}
                        onChange={(_, { value }) => this.setState({ password: value })}
                        onFocus={() => this.setState({ error: false })}
                    />
                    <Message
                        error
                        // header='Feil'
                        content='Feil brukernavn eller passord'
                    />
                    <Form.Button
                        disabled={this.state.name.length === 0 || this.state.password.length === 0}
                        onClick={() => this.checkLoginInformation()}
                    >
                        Se/Legg til arbeid
                    </Form.Button>
                </Form>
            </div>
        )
    }
}