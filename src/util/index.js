const KEY = 'vue-cli-todos'

export default {
  all (todos) {
    return todos
  },
  active (todos) {
    return todos.filter(todo => {
      return !todo.completed
    })
  },
  completed (todos) {
    return todos.filter(todo => {
      return todo.completed
    })
  },
  fetch () {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  },
  save (todo) {
    localStorage.setItem(KEY, JSON.stringify(todo))
  }
}