import React from 'react';
import { FlatList, SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native';
import { sub } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { normalize } from '../Helper/Helper';

const DATA = [
    {
        title: "Omni Fun Days",
        subTitle: "Darts",
        data: ["Player1 Wins", "Player2 Wins", "Player1 Wins"]
    },
    {
        title: "Rotary Club",
        subTitle: "Frisbee Toss",
        data: ["Player2 Wins", "Player2 Wins", "Player1 Wins"]
    },
    {
        title: "Omni Fun Days",
        subTitle: "Frisbee Toss",
        data: ["Player2 Wins", "Player1 Wins", "Player1 Wins"]
    },
    {
        title: "Omni Fun Days",
        subTitle: "Basketball",
        data: ["Player1 Wins", "Player2 Wins", "Player1 Wins"]
    },
    {
        title: "Rotary Club",
        subTitle: "Frisbee Toss",
        data: ["Player2 Wins", "Player2 Wins", "Player1 Wins"]
    },
    {
        title: "Omni Fun Days",
        subTitle: "Frisbee Toss",
        data: ["Player2 Wins", "Player1 Wins", "Player1 Wins"]
    },
];

function Home(props) {

    const { contest } = props

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.odd}>
                <Text>2 Placeholder</Text>
                <Text>-2 Placeholder</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                ListFooterComponent={() => (<View style={{ height: normalize(20) }} />)}
                ItemSeparatorComponent={() => (<View style={{ width: '100%', height: 1, backgroundColor: '#ccc' }} />)}
                renderSectionHeader={({ section: { title, subTitle } }) => (
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', height: normalize(30), alignItems: 'center', backgroundColor: '#daa816', paddingHorizontal: normalize(15) }}>
                        <Text style={styles.header}>{title}</Text>
                        <Text style={styles.header}>{subTitle}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: normalize(15),
        flexDirection: 'row', justifyContent: 'space-between',
        paddingVertical: normalize(5),
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    header: {
        fontWeight: 'bold'
    },
    odd: {
        height: '100%',
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => {
    console.log(state, "check state")
    return ({
        contest: state.contest,
    })
};

export default connect(mapStateToProps, {})(Home);