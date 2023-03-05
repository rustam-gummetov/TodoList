import { useState } from 'react';
import { Todo, Title, Li, Div, Input, EditButton, DeleteButton, SaveButton, TaskTitle, Ul, Search, Sort } from './TodoListStyles';
import { AddTodo } from '../AddTodo';

export type TaskType = {
    id: number
    title: string
    dateCreate: number
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    addNewTask: (title: string) => void
    editTask: (id: number, newTitle: string) => void
    checkedTask: (id: number) => void
    sortByName: () => void
    sortByDate: () => void
}

export function TodoList(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [editId, setEditId] = useState(0)
    const [editTaskTitle, setEditTaskTitle] = useState("")
    const [search, setSearch] = useState("")

    const getDate = (createDate: number): string => {
        let date = new Date(createDate).toLocaleDateString() + " " + new Date(createDate).toLocaleTimeString()
        return date
    }

    return (
        <Todo>
            <Title>{props.title}</Title>
            <AddTodo newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} addNewTask={props.addNewTask} />
            <Ul>
                {props.tasks.filter(task => task.title.match(new RegExp(search))).map(task =>
                    <Li key={task.id}>


                        <Div>
                            {
                                editId == task.id ?
                                    <Input value={editTaskTitle} onChange={(e) => setEditTaskTitle(e.currentTarget.value)} />
                                    :
                                    <TaskTitle isDone={task.isDone} onClick={() => props.checkedTask(task.id)}>{getDate(task.dateCreate) + " " + " " + task.title}</TaskTitle>
                            }
                        </Div>


                        <Div>
                            {
                                editId == task.id ?
                                    <SaveButton onClick={() => { props.editTask(task.id, editTaskTitle); setEditId(0) }}>Save</SaveButton>
                                    :
                                    <>
                                        <EditButton onClick={() => { setEditId(task.id); setEditTaskTitle(task.title) }}>Edit</EditButton>
                                        <DeleteButton onClick={() => props.removeTask(task.id)}>Delete</DeleteButton>
                                    </>
                            }
                        </Div>

                    </Li>
                )}
            </Ul>
            <div>
                <Search
                    placeholder='Search...'
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)} />
            </div>
            <div>
                <Sort onClick={props.sortByDate}>Sort by date</Sort>
                <Sort onClick={props.sortByName}>Sort by name</Sort>
            </div>
        </Todo>
    )
}