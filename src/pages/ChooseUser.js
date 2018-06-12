import React, { Component } from 'react';

import { Form } from 'semantic-ui-react'

export default class Overview extends Component {
    render() {
        return (
            <div style={{ maxWidth: "300px" }} >
                <h2>Venligst velg en bruker</h2>
                <Form>
                    <Form.Input label='Brukernavn' placeholder="Bruker" />
                    <Form.Input type="password" label="Passord" placeholder="Passord" />
                    <Form.Button>Se/Legg til arbeid</Form.Button>
                </Form>
            </div>
        )
    }
}