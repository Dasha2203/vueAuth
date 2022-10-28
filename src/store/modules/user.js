import axios from "@/axios";

export default {
    namespaced: true,
    state: {
        age: 0,
        email: '',
        lastName: '',
        name: '',
    },
    actions: {
        getUser: async ({ dispatch, commit }, payload) => {
            try {
                dispatch('loading/toggleLoading', true, {root: true})
                let { data } = await axios.get('/getUser', {
                    headers: {
                        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem("token"))
                    }
                });
                commit('setUser', data);
            } catch (e) {
                console.log(e)
            } finally {
                dispatch('loading/toggleLoading', false, {root: true})
            }
        }
    },
    mutations: {
        setUser: (state, payload) => {
            for (let key in payload) {
                state[key] = payload[key]
            }
        },
    },
    getters: {
        user: state => {
            return state;
        },
    }
}