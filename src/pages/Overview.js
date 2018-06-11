import React, { Component } from 'react';
import { calculateHours } from '../utils'

import { Table } from 'semantic-ui-react'

export default class Overview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            overview: [{ id: 1, name: "Daniel", workDate: "2017-10-18T22:00:00.000Z", workFrom: "08:00", workTo: "13:00", comment: "Linje 1\nLinje2\nLinje 3" }]
        }
    }

    render() {
        return (
            <div>
                <h2>Oversikt</h2>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Navn</Table.HeaderCell>
                            <Table.HeaderCell>Dato</Table.HeaderCell>
                            <Table.HeaderCell>Tid</Table.HeaderCell>
                            <Table.HeaderCell>Timer</Table.HeaderCell>
                            <Table.HeaderCell>Kommentar</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            this.state.overview.map(overview =>
                                <Table.Row>
                                    <Table.Cell>{overview.name}</Table.Cell>
                                    <Table.Cell>{new Date(overview.workDate).toLocaleDateString()}</Table.Cell>
                                    <Table.Cell>{overview.workFrom} - {overview.workTo}</Table.Cell>
                                    <Table.Cell>{calculateHours(overview.workFrom, overview.workTo)}</Table.Cell>
                                    <Table.Cell>Utside</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        );
    }
}