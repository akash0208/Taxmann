import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PRIMARY } from '../config/Colors';
import BulletsMenu from './BulletsMenu';
import ListMenu from './ListMenu';

import firestore from '@react-native-firebase/firestore';
import { getChallenges, changeContest } from '../Actions/action'
import { connect } from 'react-redux';
import { DrawerActions } from '@react-navigation/native';


const EVENTS = { title: 'Events', items: ["OMNI Fun Day", "Rotary Club Event", "Placeholder"], selected: "OMNI Fun Day" }
const PLAYER = { title: 'Player', items: ["Player1", "Player2"], selected: "Player1" }
const POINTS = { title: 'Points', items: ["0-5", "5-25", "25-100", "100+"], selected: "0-5" }

const CONTEST = { title: 'Points', items: ["BasketBall", "Dart", "Cornhole", "FrisbeeToss"] }

function Sidebar(props) {

    const { getChallenges, items, changeContest } = props;

    const [data, setData] = useState()

    useEffect(() => {
        getChallenges()
    }, [])

    useEffect(() => {
        setData(items)
        console.log(items, "yoyo")
    }, [items])

    function selectGame(params) {
        changeContest(params);
        DrawerActions.toggleDrawer()
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <BulletsMenu data={items?.Events} />
                <ListMenu data={items?.Games} selectGame={selectGame} />
                <BulletsMenu data={items?.Player} />
                <BulletsMenu data={items?.Points} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        paddingHorizontal: 25
    }
});

const mapStateToProps = (state) => ({
    items: state.items,
});

export default connect(mapStateToProps, { getChallenges, changeContest })(Sidebar);