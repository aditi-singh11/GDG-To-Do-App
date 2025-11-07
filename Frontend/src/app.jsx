import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'


const API = 'http://localhost:8000'


export default function App() {
const [todos, setTodos] = useState([])
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


useEffect(() => {
fetch(`${API}/todos`)
.then(r => r.json())
.then(setTodos)
.catch(console.error)
}, [])


async function addTodo(e) {
e.preventDefault()
if (!title.trim()) return
const newTodo = { title: title.trim(), description: description.trim(), completed: false }
// Optimistic UI: add to state immediately without id
setTodos(prev => [...prev, newTodo])
setTitle('')
setDescription('')


try {
const res = await fetch(`${API}/todos`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(newTodo),
})
const saved = await res.json()
// Replace the temporary item (match by title+description and completed=false)
setTodos(prev => prev.map(t => (t === newTodo ? saved : t)))
} catch (err) {
console.error(err)
// rollback on error
setTodos(prev => prev.filter(t => t !== newTodo))
}
}


const updateTodo = async (id, patch) => {
try {
const res = await fetch(`${API}/todos/${id}`, {
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(patch),
})
}