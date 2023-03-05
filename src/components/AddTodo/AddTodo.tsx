import React from 'react';
import { Input, Button } from './AddTodoStyles';

type PropsType = {
    newTaskTitle: string
    setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>
    addNewTask: (title: string) => void
}

export function AddTodo(props: PropsType) {
    return (
        <div>
            <Input value={props.newTaskTitle} onChange={(e) => props.setNewTaskTitle(e.currentTarget.value)} />
            <Button onClick={() => {
                props.addNewTask(props.newTaskTitle)
                props.setNewTaskTitle("")
            }}>Add
            </Button>
        </div>
    )
}