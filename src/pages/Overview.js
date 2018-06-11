import React, { Component } from 'react';
import { calculateHours, limitTo, uniqueUserList, uniqueYearList, getMonths } from '../utils'

import { Table, Dropdown } from 'semantic-ui-react'

const request = require('superagent');

export default class Overview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            overview: [], //[{ id: 1, name: "Daniel", workDate: "2017-10-18T22:00:00.000Z", workFrom: "08:00", workTo: "13:00", comment: "Linje 1\nLinje2\nLinje 3" }]
            selectedUser: "Alle",
            selectedMonth: new Date().getMonth().toString(),
            selectedYear: new Date().getFullYear().toString(),
            totalHours: 0
        }

        this.fetchOverview()
    }

    fetchOverview() {
        request
            .get("http://localhost:3000/overview")
            .then((res) => {
                this.setState({ overview: res.body })
            })
    }

    render() {
        return (
            <div>
                <h2>Oversikt: {this.state.selectedUser}</h2>

                <h3>Timer total: {this.state.totalHours}</h3>

                <Dropdown
                    placeholder='Bruker'
                    selection
                    value={this.state.selectedUser}
                    options={[{ text: "Alle", value: "Alle" }].concat(uniqueUserList(this.state.overview))}
                    onChange={(_, { value }) => this.setState({ selectedUser: value })}
                />
                <Dropdown
                    placeholder='Måned'
                    selection
                    value={this.state.selectedMonth}
                    options={[{ text: "Alle", value: "Alle" }].concat(getMonths())}
                    onChange={(_, { value }) => this.setState({ selectedMonth: value })}
                />
                <Dropdown
                    placeholder='År'
                    selection
                    value={this.state.selectedYear}
                    options={[{ text: "Alle", value: "Alle" }].concat(uniqueYearList(this.state.overview))}
                    onChange={(_, { value }) => this.setState({ selectedYear: value })}
                />

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
                            this.state.overview.map((overview, index) =>
                                <Table.Row key={index} >
                                    <Table.Cell>{overview.name}</Table.Cell>
                                    <Table.Cell>{new Date(overview.workDate).toLocaleDateString()}</Table.Cell>
                                    <Table.Cell>{overview.workFrom} - {overview.workTo}</Table.Cell>
                                    <Table.Cell>{calculateHours(overview.workFrom, overview.workTo)}</Table.Cell>
                                    <Table.Cell>!TODO!</Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        );
    }
}