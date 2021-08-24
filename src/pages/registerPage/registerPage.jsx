import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinkUI from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import "./registerPage.scss"
import axios from 'axios';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

    const history = useHistory()
    const [agreement1, setAgreement1] = useState(false)
    const [agreement2, setAgreement2] = useState(false)
    const [error, setError] = useState(false)
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpHandler = (e) => {
        e.preventDefault()
        axios.post('/register', {
            name,
            surname,
            email,
            password
        })
        .then(res => res.data == 'Пользователь зарегистрирован' ? history.push('/login') : '')
        .catch(err => setError(true))
    }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Имя"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setSurname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Электронная почта"
                name="email"
                autoComplete="email"
                onChange={(e) => {setEmail(e.target.value); setError(false)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Я согласен(-на) с правилами сервиса"
                onChange={() => setAgreement1(!agreement1)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Я готов(-а) получать рассылку спецпредложений"
                onChange={() => setAgreement2(!agreement2)}
              />
            </Grid>
          </Grid>
          <Button
            id="register"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={agreement1 && name.length && surname.length && email.length && email.includes("@") && email.includes('.') && password.length > 6 ? false : true}
            onClick={(e) => signUpHandler(e)}
          >
            Зарегистрироваться
          </Button>
          
          {error ? <small style={{color: '#d32f2f'}}>Такой адрес электронной почты уже существует</small> : ""}
          {(email.length && email.includes("@") && email.includes('.')) ? '' : <small style={{color: '#d32f2f'}}>Неверный формат почты. Почта используется для подтверждения аккаунта.</small>}
          {' '}
          {password.length <= 6 ? <small style={{color: '#d32f2f'}}>Слишком короткий пароль. Пароль должен содержать более 6 символов</small> : ''}
          
          <Grid container justifyContent="flex-end">
            <Grid item>
                <Link to="login">
                    <LinkUI variant="body2">
                        Уже есть аккаунт? Авторизуйтесь
                    </LinkUI>
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
