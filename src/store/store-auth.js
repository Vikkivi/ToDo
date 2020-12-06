import { firebaseAuth } from 'boot/firebase';

const state = {

}

const mutations = {

}

const actions = {
  registerUser({}, payload) {
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message);
    });
  },

  loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error.message, error.code);
    });
  }
}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
