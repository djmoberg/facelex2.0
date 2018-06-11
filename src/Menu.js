import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MyMenu extends Component {
    render() {
        const activeTab = this.props.activeTab

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item 
                        name='Velg bruker' 
                        active={activeTab === "chooseUser"} 
                        onClick={() => this.props.onMenuClick("chooseUser")} />
                    <Menu.Item
                        name='Bruker'
                        active={activeTab === "user"}
                        onClick={() => this.props.onMenuClick("user")}
                    />
                    <Menu.Item
                        name='Oversikt'
                        active={activeTab === "overview"}
                        onClick={() => this.props.onMenuClick("overview")}
                    />
                </Menu>
            </div>
        )
    }
}