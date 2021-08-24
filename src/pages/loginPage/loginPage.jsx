import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./loginPage.scss"
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Все права защищены © '}
      <Link color="inherit" to="/">
        sdteam.ru
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [remember, setRemember] = useState(false)
    const history = useHistory()
  const signInHandler = (e) => {
      e.preventDefault()
      axios.post('/login', {
          email,
          password
      })
      .then(res => {
          if (res.data.status == 'error') {
            return setError(res.data.error)
          }
          console.log(res)
          Cookies.set('token', res.data.token, remember? {expires: 30} : '')
          Cookies.set('email', res.data.email, remember? {expires: 30} : '')
          history.push('/profile')
      })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {setEmail(e.target.value); setError('')}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {setPassword(e.target.value); setError('')}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
            onChange={() => setRemember(!remember)}
          />
          <Button
            type="submit"
            disabled={(password.length<5) || !email.includes("@") || !email.includes(".") ? true : false}
            fullWidth
            variant="contained"
            color="primary"
            id="login"
            className={classes.submit}
            onClick={(e) => signInHandler(e)}
          >
            Войти
          </Button>
          {error ? <span style={{color: '#d32f2f'}}>{error}</span> : ''}
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                Забыли пароль?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2">
                {"Нет аккаунта? Зарегистрируйтесь."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
