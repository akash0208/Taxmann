import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { normalize } from '../Helper/Helper';

const BulletsMenu = (props) => {
    const { data } = props;
    console.log(data, "check data")

    const [state, setState] = useState({})
    useEffect(() => {
        setState(data)
    }, [data])

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ ...styles.itemText, marginStart: 0, fontSize: normalize(16) }}>{state?.title}</Text>
                <Image source={require("../Assets/down.png")} style={styles.down} />
            </View>
            {state?.items?.map((item) => {
                return (
                    <TouchableOpacity style={styles.listItem} onPress={() => setState({ ...state, selected: item })} activeOpacity={0.9}>
                        <View style={styles.dot}>
                            {state.selected == item ? <View style={styles.filledDot} /> : null}
                        </View>
                        <Text style={styles.itemText}>{item}</Text>
                    </TouchableOpacity>
                )
            }
            )}
        </View>
    )
};

export default BulletsMenu;

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        paddingVertical: normalize(15)
    },
    dot: {
        width: normalize(18),
        height: normalize(18),
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: normalize(12)
    },
    itemText: {
        marginStart: normalize(15),
        color: '#fff',
        fontSize: normalize(13)
    },
    down: {
        width: normalize(15),
        height: normalize(15)
    },
    filledDot: {
        width: normalize(14),
        height: normalize(14),
        backgroundColor: '#fff',
        borderRadius: 30
    }
});
