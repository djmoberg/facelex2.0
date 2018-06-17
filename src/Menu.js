import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MyMenu extends Component {
    render() {
        const activeTab = this.props.activeTab

        return (
            <div>
                <Menu pointing secondary>
                    {!this.props.isLoggedIn &&
                        <Menu.Item
                            name='Velg bruker'
                            active={activeTab === "chooseUser"}
                            onClick={() => this.props.onMenuClick("chooseUser")}
                        />
                    }
                    {this.props.isLoggedIn &&
                        <Menu.Item
                            name='Bruker'
                            active={activeTab === "user"}
                            onClick={() => this.props.onMenuClick("user")}
                        />
                    }
                    <Menu.Item
                        name='Oversikt prosjekt'
                        active={activeTab === "overview"}
                        onClick={() => this.props.onMenuClick("overview")}
                    />
                    {this.props.isLoggedIn &&
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='Logg ut'
                                active={activeTab === "logOut"}
                                onClick={() => this.props.onMenuClick("logOut")}
                            />
                        </Menu.Menu>
                    }
                </Menu>
            </div>
        )
    }
}