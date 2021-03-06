import React from 'react';
import { Button, Image, StatusBar, Text, View } from 'react-native';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Sidebar from '../Components/Sidebar';
import { PRIMARY } from '../config/Colors';
import { connect } from 'react-redux';

const Drawer = createDrawerNavigator();

function Navigator(props) {

    const { contest } = props;

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
            <Drawer.Navigator initialRouteName="Home" drawerContent={() => <Sidebar />} >
                <Drawer.Screen name="Home" component={Home} options={{
                    headerShown: true,
                    headerTitle: props => <Text>{contest}</Text>,
                    headerRight: () => (
                        <Image source={require('../Assets/filter.png')} style={{ width: 18, height: 18, marginEnd: 15 }} />
                    ),
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state) => ({
    contest: state.contest,
});

export default connect(mapStateToProps, {})(Navigator);