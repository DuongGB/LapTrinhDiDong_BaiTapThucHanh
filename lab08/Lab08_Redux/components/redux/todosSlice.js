// store/todosSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            name: "name1",
            todos: [
                { todo_id: 1, title: "test1", completed: true },
                { todo_id: 2, title: "test2", completed: true },
            ],
            id: "1",
        },
        {
            name: "name2",
            todos: [
                { todo_id: 201, title: "Go jogging", completed: false },
                { todo_id: 202, title: "Write a blog post", completed: false },
            ],
            id: "2",
        },
        {
            name: "name3",
            todos: [
                { todo_id: 301, title: "Clean the house", completed: true },
                { todo_id: 302, title: "Call mom", completed: false },
            ],
            id: "3",
        },
    ],
    selectedUser: null,
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setSelectedUser(state, action) {
            state.selectedUser = action.payload;
        },
        // Thêm một todo mới vào danh sách todos của user
        addTodo(state, action) {
            const { userId, newTodo } = action.payload;
            const user = state.users.find((user) => user.id === userId);
            if (user) {
                user.todos.push(newTodo);
            }
        },
        // Chỉnh sửa một todo
        editTodo(state, action) {
            const { userId, todo_id, editTodo } = action.payload;
            const user = state.users.find((user) => user.id === userId);
            if (user) {
                const todo = user.todos.find(
                    (todo) => todo.todo_id === todo_id
                );
                if (todo) {
                    todo.title = editTodo.title;
                    todo.completed = editTodo.completed;
                    console.log("Edited todo", todo_id);
                }
            }
        },
        deleteTodo(state, action) {
            const { userId, todo_id } = action.payload;
            const user = state.users.find((user) => user.id === userId);
            if (user) {
                user.todos = user.todos.filter(
                    (todo) => todo.todo_id !== todo_id
                );
                console.log("Deleted todo", todo_id);
            }
        },
    },
});

export const { addTodo, editTodo, deleteTodo, setSelectedUser } =
    todosSlice.actions;
export default todosSlice.reducer;
