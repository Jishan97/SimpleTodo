import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../redux/todoReducer'

const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})

export default store