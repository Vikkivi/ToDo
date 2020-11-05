import Vue from 'vue';

const state = {
    tasks: {
        'ID1': {
          name: 'Сходить в магазин',
          done: false,
          dueDate: '20.09.2020',
          dueTime: '18:00'
        },
        'ID2': {
          name: 'Купить хлеб',
          done: false,
          dueDate: '16.09.2021',
          dueTime: '14:00'
        },
        'ID3': {
          name: 'Купить сахар',
          done: false,
          dueDate: '19.07.2022',
          dueTime: '18:45'
        },
    }
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates);
    },

    deleteTask(state, id) {
        Vue.delete(state.tasks, id);
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload);
    },

    deleteTask({ commit }, id) {
        commit('deleteTask', id);
    }
}

const getters = {
    tasks: (state) => state.tasks
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
