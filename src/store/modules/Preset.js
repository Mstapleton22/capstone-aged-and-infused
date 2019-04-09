
//is empty until the action is mutated and placed in state
const state = {
  preset: [],
  liquor: [],
  ingredients: [],
  separateIngredients: [],
  custom: {
    selectedLiquor: '',
    selectedCategory: '',
    selectedIngredients: []
  }
}

//gets the data from the state.
const getters = {
  allPresets: state => state.preset,
  allLiquors: state => state.liquor,
  allIngredients: state => state.ingredients,
  // allCategories: state => state.category,
  allSeparateIngredients: state => state.separateIngredients,
  allCustom: state => state.custom
}

//action fetches the data from the backend
const actions = {
  async fetchPreset({ commit }) {
    const response = await fetch("http://localhost:3000/preset")
      .then(resp => resp.json())
    commit('setPreset', response)
  },
  async fetchLiquor({ commit }) {
    const response = await fetch("http://localhost:3000/liquor")
      .then(resp => resp.json())
    commit('setLiquor', response)
  },
  async fetchIngredients({ commit }) {
    const response = await fetch("http://localhost:3000/ingredients")
      .then(resp => resp.json())
    // console.log(response)
    commit('setIngredients', response)
  },
  async fetchCategories({ commit }) {
    const response = await fetch("http://localhost:3000/ingredientcategory")
      .then(resp => resp.json())
    commit('setCategory', response)
  },
  async fetchIngCategory({ commit }) {
    const response = await fetch("http://localhost:3000/category_and_ingredient")
      .then(resp => resp.json())
    commit('setSeparateIngredients', response)
  },

}
//mutations will take the action and alter the state with it.
const mutations = {
  setPreset: (state, preset) => (state.preset = preset),
  setLiquor: (state, liquor) => (state.liquor = liquor),
  setIngredients: (state, ingredients) => (state.ingredients = ingredients),
  setCategory: (state, category) => (state.category = category),
  setSeparateIngredients: (state, separateIngredients) => (state.separateIngredients = separateIngredients),
  setSelectedLiquor: (state, selectedLiquor) => (state.custom.selectedLiquor = selectedLiquor),
  setSelectedCategory: (state, selectedCategory) => (state.custom.selectedCategory = selectedCategory),
  setSelectedIngredients: (state, selectedIngredients) => (state.custom.selectedIngredients = selectedIngredients)
}

export default {
  state,
  getters,
  actions,
  mutations
}
