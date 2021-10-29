import React, { useState } from 'react';
//import css
import './TodoInput.css';
//import material ui
import TextField from '@mui/material/TextField';
//creating a counter for the index of the array of todos
let indexCounter = 0;
const TodoInput = ({ addTodo }) => {
    //create a state for the input
    const [input, setInput] = useState('');
    //create a handle change function and handle key press function to listen for the input
    const handleChange = (e) => {
        //input is equal to the target value of the text field
        setInput(e.target.value);
    }
    //create a function to listen for the user enter key press
    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            //if the key press is entered create a new object with them input
            const newTodo = {
                id: indexCounter,
                label: input,
                completed: false
            };
            //increase the counter of the index
            indexCounter++;
            //call the addTodo function pass in the object
            addTodo(newTodo);
            //change input value to an emppty string
            setInput('');
        }
    }
    return (
        <TextField fullWidth className="input" label="Create a new todo ..." variant="filled"
            onChange={handleChange}
            onKeyPress={handleKeypress}
            value={input}
        />
    );
};
export default TodoInput;