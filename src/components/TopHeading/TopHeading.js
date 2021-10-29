import React from 'react';
//import material ui
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
//import styled component
import { HeadingTitle } from './TopHeading.styles';
const TopHeading = ({ darkMode, setDarkMode }) => {
    //create a function to handle when the user clicks on the theme button
    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <HeadingTitle>
                TODO
                <IconButton
                    onClick={handleClick}
                >
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
            </HeadingTitle>



        </div>
    );
};
export default TopHeading;