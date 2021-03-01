import { CHANGE_CONTEST, GET_CHALLENGES } from './types';

import firestore from '@react-native-firebase/firestore';

export const getChallenges = () => async dispatch => {

    const usersCollection = await firestore().collection('SidebarItems').doc("Data").get();
    if (usersCollection.exists) {
        dispatch({
            type: GET_CHALLENGES,
            payload: usersCollection.data(),
        })
    }
    else {
        dispatch({
            type: GET_CHALLENGES,
            payload: {},
        })
    }
}

export const changeContest = (name) => async dispatch => {
    dispatch({
        type: CHANGE_CONTEST,
        payload: name
    })
}