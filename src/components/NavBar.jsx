import React from 'react';
import { makeStyles } from '@mui/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';


const img = require('../assets/images/loader.png');

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: '16px'
    },
    title: {
        flexGrow: 1
    },
    imagen: {
        borderRadius: '50%'
    }
}));

const darkTheme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            main: '#ff1c44',
        },
    },
});

function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            <img src={img} alt="Logo" />
                        </Typography>

                        <Button color="inherit"  startIcon={<LogoutIcon />}>Cerrar Sesión</Button>
                    </Toolbar>

                </AppBar>
            </ThemeProvider>
        </div>
    );
}

export default Navbar;