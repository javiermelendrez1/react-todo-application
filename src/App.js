import './App.css';
import { useState } from 'react';
//import my components
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import BottomButtons from './components/BottomButtons/BottomButtons';
import TopHeading from './components/TopHeading/TopHeading';

//import material ui components
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
//import background images
import DARKBG from './images/bg-desktop-dark.jpg';
import LIGHTBG from './images/bg-desktop-light.jpg';

function App() {
  //create state for todo
  const [todo, setTodo] = useState([]); //initally an empty array
  //create a function to add the todo to the array
  const addTodo = (newTodo) => {
    //passing in the new item
    //adding the item and using spread syntax to put in the rest of the array
    setTodo([newTodo, ...todo]);
  };
  //state for the theme of the app
  const [darkMode, setDarkMode] = useState(false);
  //style for the dark theme
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },

  });
  //style for the background image and paper container 
  const styles = {
    appContainer: {
      backgroundImage: darkMode ? `url(${DARKBG})` : `url(${LIGHTBG})`,
      backgroundRepeat: `no-repeat`,
      height: '325px',
      paddingTop: '50px'
    },
    paperContainer: {
      marginBottom: '25px'
    },
    bottomButtonContainer: {
      borderTop: `1px solid #dcdcdc`
    }
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <div style={styles.appContainer}>
        <Container maxWidth="sm">
          <TopHeading setDarkMode={setDarkMode} darkMode={darkMode} />
          <Paper style={styles.paperContainer}><TodoInput addTodo={addTodo} />
          </Paper>
          <Paper><TodoList todo={todo} setTodo={setTodo} /></Paper>
          {todo.length == 0 ? null :
            <Paper style={styles.bottomButtonContainer}>
              <BottomButtons todo={todo} setTodo={setTodo} />
            </Paper>
          }

        </Container>
      </div>
    </ThemeProvider>

  );
}

export default App;
