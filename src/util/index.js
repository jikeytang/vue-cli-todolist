const KEY = 'vue-cli-todos'

export default {
  fetch () {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  },
  save (todo) {
    localStorage.setItem(KEY, JSON.stringify(todo))
  }
}
