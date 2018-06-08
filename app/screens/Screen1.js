import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from "react-native-elements";

const bodybuildingList = [
    {
        name :'Legs', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name:'Chest', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name:'Arms', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name:'Shoulders', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name:'Back', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        name:'Abs', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    }];

class Screen extends Component {
    handlePress = () => {
        this.props.navigator.push({
            screen: 'Screen3',
            title: 'Screen 3',
        });
    };

    /*render() {
      return (
        <Container
          backgroundColor="#F44336"
          onPress={this.handlePress}
        />
      );
    }*/
    render() {
        return(
            <View>
            <ScrollView>
                {
                bodybuildingList.map((u, i) => {
                    return (
                        <TouchableHighlight  key = {i} onPress={this.handlePress}>
                        <View key={i}>
                            <Card
                                title={u.name}
                            />
                        </View>
                        </TouchableHighlight>
                    );
                })
            }
            </ScrollView>
            </View>
        );

    }


}

export default Screen;
