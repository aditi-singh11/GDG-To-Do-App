import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({ todos = [], onToggle, onDelete, onEdit }) {
if (!todos.length) return <p>No todos yet.</p>
return (
<ul className="todo-list">
{todos.map((t, i) => (
<TodoItem key={t.id ?? i} todo={t} onToggle={() => onToggle(t)} onDelete={() => onDelete(t.id)} onEdit={fields => onEdit(t, fields)} />
))}
</ul>
)
}