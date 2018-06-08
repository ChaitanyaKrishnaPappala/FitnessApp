import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from "react-native-elements";


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }


    render() {
        return (
            <Card
                title={null}
                image={{ url: "http://via.placeholder.com/160x160" }}
                containerStyle={{ padding: 0, width: 160 }}>
            </Card>
        );
    }
}

export default HomeScreen;
