import {getDatabase, ref, get} from "firebase/database"

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        }
    },
    actions: {
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid')
                const info = (await get(ref(getDatabase(), `/user/${uid}/info`))).val()
                commit('setInfo', info)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        info: s => s.info
    }
}