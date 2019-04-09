//is empty until the action is mutated and placed in state
const state = {
  category: [],
  categoryID: null,
  // customize: {}
}

//gets the data from the state.
const getters = {
  allCategories: state => state.category,
  categoryID: state => state.categoryID
}

//action fetches the data from the backend
const actions = {
  async fetchCategories({ commit }) {
    const response = await fetch("http://localhost:3000/ingredientcategory")
      .then(resp => resp.json())
    // .then(resp => (this.fetchPreset = resp))
    // console.log(response)
    commit('setCategory', response)
  },
  getCategory: ({ commit }, int) => {
    commit('categoryForIngredients', { int })
  },
}
//mutations will take the action and alter the state with it.
const mutations = {
  setCategory: (state, category) => (state.category = category),
  categoryForIngredients: (state, { int }) => {
    state.categoryID = int
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
