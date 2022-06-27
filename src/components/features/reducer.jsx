import { createReducer, createAction, configureStore } from "@reduxjs/toolkit"


const initialState = {
    todos: []
}
export const add = createAction('add')
export const del = createAction('delete')

 const todosReducer = createReducer(initialState, (builder)=>{
    builder
       .addCase(add, (state, action) => {
        state.todos.push(action.payload)
     })
     .addCase(del, (state, action)=>{
       state.todos = state.todos.filter((element, index)=> index !== action.payload)
     })
})



export const store = configureStore({
    reducer: todosReducer
})
export default todosReducer.reducer;