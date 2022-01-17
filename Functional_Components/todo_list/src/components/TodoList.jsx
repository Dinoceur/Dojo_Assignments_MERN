import React, {useState, useEffect} from 'react'

const TodoList = () => {
    const [todoslist,setTodosList] = useState([])
    const [todolist,setTodoList] = useState('')
    const [todolistEdit, setTodoListEdit] = useState(null)
    const [editText, setEditText] = useState('')

    useEffect(() => {
        const temp = localStorage.getItem('data')
        const loadedTodosList = JSON.parse(temp)

        if(loadedTodosList) {
            setTodosList(loadedTodosList)
        }
    }, [])

    useEffect(() => {
        const temp = JSON.stringify(todoslist)
        localStorage.setItem('data', temp)
    }, [todoslist])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodoList = {
            id: new Date().getTime(),
            text: todolist,
            completed: false,
        }
        
        setTodosList([...todoslist].concat(newTodoList))
        setTodoList('')
    }

    const deleteTodoList = (id) => {
        const updatedTodosList = [...todoslist].filter((todolist) => todolist.id !== id)

        setTodosList(updatedTodosList)
    }

    const toggleComplete = (id) => {
        const updatedTodosList = [...todoslist].map((todolist) => {
            if(todolist.id === id){
                todolist.completed = !todolist.completed
            }
            return todolist
        })

        setTodosList(updatedTodosList)
    } 

    const editTodoList = (id) => {
        const updatedTodosList = [...todoslist].map((todolist) => {
            if(todolist.id === id){
                todolist.text = editText
            }
            return todolist
        })
        setTodosList(updatedTodosList)
        setTodoListEdit(null)
        setEditText('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type = 'text' onChange={(e) => setTodoList(e.target.value)} value = {todolist}></input>
                <button className="btn btn-primary m-2" type = 'submit'>Add</button>
            </form>
            {todoslist.map((todolist) => <div key = {todolist.id}>
                    
                    {todolistEdit === todolist.id 
                    ? (<input type = 'text' class = 'm-2' onChange={(e) => setEditText(e.target.value)} value = {editText}></input>) 
                    : (<div>{todolist.text}</div>)}

                    <input type = 'checkbox' onChange={() => toggleComplete(todolist.id)} checked = {todolist.completed}></input>
                    {todolistEdit === todolist.id 
                    ? (<button className="btn btn-primary m-2" onClick={() => editTodoList(todolist.id)}>Submit Edit</button>) 
                    : (<button className="btn btn-primary m-2" onClick={() => setTodoListEdit(todolist.id)}>Edit</button>)}
                    <button className="btn btn-primary m-2" onClick={() => deleteTodoList(todolist.id)}>Delete</button>

                </div>)}
        </div>
    )
}

export default TodoList