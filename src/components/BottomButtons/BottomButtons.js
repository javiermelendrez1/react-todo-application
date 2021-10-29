import React from 'react';
//import css
import './BottomButtons.css';
//import material ui components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
const BottomButtons = ({ todo, setTodo }) => {
    //this array will hold all the not completed tasks
    let open = todo.filter(task => task.completed == false);
    //variable to hold how many tasks are not completed
    let num1 = open.length;
    //string to display the variable above
    let label1 = num1 + ' Items Left';
    //array 
    let completed = todo.filter(task => task.completed !== true);
    //function to handle when tasks is completed
    const handleClick = () => {
        setTodo(completed);
    }
    return (
        <List className="bottom-buttons">
            <ListItem>
                <ListItemText primary={label1} />
                <span className="clear-completed"
                    onClick={handleClick}
                >Clear Completed</span>
            </ListItem>
        </List>
    );
};
export default BottomButtons;