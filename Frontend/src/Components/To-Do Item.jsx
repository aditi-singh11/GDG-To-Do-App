import React, { useState } from 'react'


export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
const [editing, setEditing] = useState(false)
const [title, setTitle] = useState(todo.title)
const [description, setDescription] = useState(todo.description || '')


function save() {
onEdit({ ...todo, title, description })
setEditing(false)
}


return (
<li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
<div className="left">
<input type="checkbox" checked={todo.completed} onChange={onToggle} />
{editing ? (
<div className="edit">
<input value={title} onChange={e => setTitle(e.target.value)} />
<input value={description} onChange={e => setDescription(e.target.value)} />
<button onClick={save}>Save</button>
<button onClick={() => setEditing(false)}>Cancel</button>
</div>
) : (
<div className="content">
<div className="title">{todo.title}</div>
{todo.description ? <div className="desc">{todo.description}</div> : null}
</div>
)}
</div>
<div className="actions">
{!editing && <button onClick={() => setEditing(true)}>Edit</button>}
<button onClick={onDelete}>Delete</button>
</div>
</li>
)
}