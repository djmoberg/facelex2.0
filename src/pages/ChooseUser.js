import React, { Component } from 'react';

import { Form } from 'semantic-ui-react'

const request = require('superagent');

export default class ChooseUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            password: ""
        }
    }

    checkLoginInformation() {
        request.post("http://localhost:3000/user/login")
            .send({ name: this.state.name, password: this.state.password })
            .then((res) => {
                this.setState({ password: "" })
                if (res.text === "correct") {
                    this.props.setName(this.state.name)
                }
                console.log(res.text)
            })
    }

    render() {
        return (
            <div style={{ maxWidth: "300px" }} >
                <h2>Venligst velg en bruker</h2>
                <Form>
                    <Form.Input
                        type="text"
                        label='Brukernavn'
                        placeholder="Bruker"
                        value={this.state.name}
                        onChange={(_, { value }) => this.setState({ name: value })}
                    />
                    <Form.Input
                        type="password"
                        label="Passord"
                        placeholder="Passord"
                        value={this.state.password}
                        onChange={(_, { value }) => this.setState({ password: value })}
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