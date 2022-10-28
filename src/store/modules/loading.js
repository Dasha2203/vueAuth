import axios from "@/axios";

export default {
    namespaced: true,
    state: {
        loading: false
    },
    actions: {
        toggleLoading: (context, payload) => {
            context.commit('setLoading', payload)
        }
    },
    mutations: {
        setLoading: (state, payload) => {
            state.loading = payload;
        }
    },
    getters: {
        loading: state => {
            return state.loading;
        },
    }
}