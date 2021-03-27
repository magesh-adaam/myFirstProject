import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  pos: {
    marginBottom: 12,
  },
  widthBox: {
    width: 400,
    height: 350,
  },
  marginTop: {
    marginTop: 200,
  },
  display: {
    display: 'flex',
  },
  buttonColor: {
    color: 'green',
  },
  padding: {
    padding: 10,
  },
  buttonMargin: {
    marginLeft: 157,
    padding: 10,
  },
  bg: {
    backgroundImage: 'url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png")',
    height: 800,
  },
  paper: {
    padding: 2,
    textAlign: 'center',
  },
  heightGrid: {
    height: 250,
  },
});

function Login() {
    const classes = useStyles();
  
    return (
    <div align='center' className={classes.bg}>
        <Grid container spacing={3} className={classes.heightGrid}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    <Card className={classes.widthBox}>
         <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Login
          </Typography>
          <FormControl className={classes.display}>
            <InputLabel htmlFor="my-user">UserName</InputLabel>
            <Input id="my-user" aria-describedby="my-helper-text" />
          </FormControl>
          <br/>
          <FormControl className={classes.display}>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input id="my-password" type='password' aria-describedby="my-helper-text" />
          </FormControl>
        <br/>
        <FormControl className={classes.display}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
        <br/>
        <div align='center' className={classes.display}>
        <div className={classes.padding}>
        <Button variant="contained" color="primary">
            LogIn
        </Button>
        </div>
        <div  className={classes.buttonMargin}>
        <Button variant="contained" className={classes.buttonColor}>
            SignUp
        </Button>
        </div>
        </div>
        </CardContent>
      </Card>
      </div>
    );
}

export default Login;
