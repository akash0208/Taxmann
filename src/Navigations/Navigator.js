import React from 'react';
import { Button, Image, StatusBar, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import Sidebar from '../Components/Sidebar';
import { PRIMARY } from '../config/Colors';

const Drawer = createDrawerNavigator();

function Navigator(props) {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={PRIMARY} barStyle="light-content" />
            <Drawer.Navigator initialRouteName="Home" drawerContent={() => <Sidebar />} >
                <Drawer.Screen name="Home" component={Home} options={{
                    headerShown: true,
                    headerTitle: props => <Text></Text>,
                    headerRight: () => (
                        <Image source={require('../Assets/filter.png')} style={{ width: 18, height: 18, marginEnd: 15 }} />
                    ),
                }} />
                {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;