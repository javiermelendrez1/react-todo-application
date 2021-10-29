import React, { useState } from 'react';
//import material ui
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const TodoList = ({ todo, setTodo }) => {
    //create a function to handle when the checkbox is clicked
    const handleChange = (id) => {
        //take in the unique id of the todo
        //call the set todo function
        setTodo(
            //map the todo array
            todo.map(task => {
                //if the array id === the unique passed in
                //change completed boolean value to oppisite of what it was
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }
                return task;
            })
        );
    }
    //create function to handle the button delete
    const handleClick = (id) => {
        //this function also takes in the unique id
        //wee areee going to set todo to the return of filtering the array for all the todo
        //not equal to the unique id
        setTodo(
            todo.filter(task => task.id !== id)
        );
    }
    return (
        <list>
            {
                todo.map((task) => {
                    console.log(task)
                    return (
                        <ListItem key={task.id} className="list-item">
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={task.completed}
                                    tabIndex={-1}
                                    disableRipple
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    onChange={() => handleChange(task.id)}
                                />
                            </ListItemIcon>
                            <ListItemText id={task.label} primary={task.label}
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            />
                            <IconButton edge="end" aria-label="delete"
                                onClick={() => handleClick(task.id)}
                            >
                                <DeleteIcon
                                />
                            </IconButton>
                        </ListItem>

                    );
                })
            }
        </list>);
};
export default TodoList;