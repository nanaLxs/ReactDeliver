import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';



var  ZaxShopCar = React.createClass({
    render() {



        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                我是商品详情页
                </Text>

                <Text style={styles.welcome}>
                    我是上一个页面传过来的值__{this.props.data}
                </Text>

            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports =  ZaxShopCar;
