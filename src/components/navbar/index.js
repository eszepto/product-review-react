import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom"
import './index.css';

function NavBar() {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Products
                </Typography>
                <Button color="inherit">Log in</Button>
                <Link to="/login"><Button color="inherit">Sign up</Button></Link>
            </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default NavBar