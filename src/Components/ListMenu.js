import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { normalize } from '../Helper/Helper';

const ListMenu = (props) => {

    const { data } = props;
    console.log(data, "check playe")

    const [state, setState] = useState({})
    useEffect(() => {
        setState(data)
    }, [data])

    function _renderItem({ item, index }) {
        return (
            <TouchableOpacity
                key={index}
                style={styles.listItem}
                onPress={() => props.selectGame(item)}
                activeOpacity={0.8}>
                <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ ...styles.itemText, marginStart: 0, fontSize: normalize(16) }}>{state?.title}</Text>
                <Image source={require("../Assets/down.png")} style={styles.down} />
            </View>
            <FlatList
                data={state ? state.items : []}
                renderItem={_renderItem}
                keyExtractor={item => item.key}
                ListHeaderComponent={() => (<View style={styles.line} />)}
                ListFooterComponent={() => (<View style={styles.line} />)}
                ItemSeparatorComponent={() => (<View style={styles.line} />)}
            />

        </View>
    )
};

export default ListMenu;

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: normalize(15)
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
        justifyContent: 'center',
        marginVertical: normalize(10),
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
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc'
    }
});
