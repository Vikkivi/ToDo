import Vue from 'vue';
import { uid } from 'quasar'

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
    },

    search: ''
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates);
    },

    deleteTask(state, id) {
        Vue.delete(state.tasks, id);
    },

    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task);
    },

    setSearch(state, value) {
        state.search = value;
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload);
    },

    deleteTask({ commit }, id) {
        commit('deleteTask', id);
    },

    addTask({ commit }, task) {
        const taskId = uid();

        commit('addTask', {
            id: taskId,
            task
        })
    },

    setSearch({ commit }, value) {
        commit('setSearch', value);
    },
}

const getters = {
    filteredTasks: (state) => {
        if (state.search) {
            const tasks = {};
            const search = state.search.toLowerCase();
            Object.keys(state.tasks).forEach(key => {
                const taskName = state.tasks[key].name.toLowerCase();
                if (taskName.includes(search)) {
                    tasks[key] = state.tasks[key];
                }
            })

            return tasks;
        }

        return state.tasks;
    },

    tasksToDo: (state, getters) => {
        const tasks = {};
        Object.keys(getters.filteredTasks).forEach(key => {
            if (!state.tasks[key].done) {
                tasks[key] = state.tasks[key];
            }
        })

        return tasks;
    },

    tasksDone: (state, getters) => {
        const tasks = {};
        Object.keys(getters.filteredTasks).forEach(key => {
            if (state.tasks[key].done) {
                tasks[key] = state.tasks[key];
            }
        })

        return tasks;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
