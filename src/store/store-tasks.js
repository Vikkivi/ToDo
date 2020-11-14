import Vue from 'vue';
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1': {
          name: 'Сходить в магазин',
          done: false,
          dueDate: '2020/11/18',
          dueTime: '18:00'
        },
        'ID2': {
          name: 'Купить хлеб',
          done: false,
          dueDate: '2021/11/12',
          dueTime: '14:00'
        },
        'ID3': {
          name: 'Купить сахар',
          done: false,
          dueDate: '2020/11/17',
          dueTime: '18:45'
        },
    },

    search: '',
    sort: 'dueDate'
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
    },

    setSort(state, value) {
        state.sort = value;
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

    setSort({ commit }, value) {
        commit('setSort', value);
    },
}

const getters = {
    sortedTasks: (state) => {
        const tasksSorted = {};
        const sortedKeys = Object.keys(state.tasks).sort((a,b) => {
            const aName = state.tasks[a][state.sort].toLowerCase();
            const bName = state.tasks[b][state.sort].toLowerCase();
            if (aName > bName) return 1
            else if (aName < bName) return -1
            else return 0
        })
        sortedKeys.forEach(key => {
            tasksSorted[key] = state.tasks[key];
        })
        return tasksSorted;
    },

    filteredTasks: (state, getters) => {
        const sortedTasks = getters.sortedTasks;
        if (state.search) {
            const tasks = {};
            const search = state.search.toLowerCase();
            Object.keys(sortedTasks).forEach(key => {
                const taskName = sortedTasks[key].name.toLowerCase();
                if (taskName.includes(search)) {
                    tasks[key] = sortedTasks[key];
                }
            })

            return tasks;
        }

        return sortedTasks;
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
