import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PRIMARY } from '../config/Colors';
import BulletsMenu from './BulletsMenu';
import ListMenu from './ListMenu';

const EVENTS = { title: 'Events', items: ["OMNI Fun Day", "Rotary Club Event", "Placeholder"], selected: "OMNI Fun Day" }
const PLAYER = { title: 'Player', items: ["Player1", "Player2"], selected: "Player1" }
const POINTS = { title: 'Points', items: ["0-5", "5-25", "25-100", "100+"], selected: "0-5" }

const CONTEST = { title: 'Points', items: ["0-5", "5-25", "25-100", "100+"], selected: "0-5" }

function Sidebar(props0) {

    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <BulletsMenu data={EVENTS} />
                <ListMenu data={CONTEST} />
                <BulletsMenu data={PLAYER} />
                <BulletsMenu data={POINTS} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Sidebar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: PRIMARY,
        paddingHorizontal: 25
    }
});