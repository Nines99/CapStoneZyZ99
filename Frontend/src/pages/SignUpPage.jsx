import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useUserContext } from '../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUpPage() {

    const [result, setResult] = React.useState('');
    const { currentUser, handleUpdateUser } = useUserContext();
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // convert form data to object and post to backend
    axios.post('/api/users/register', Object.fromEntries(data.entries()))
        .then(response => {
            let result = response.data.result;
            let user = response.data.data;
            console.log(user)

            setResult(result);
            if (user) {
                handleUpdateUser(user);
                navigate('/profile');
            }
        }).catch(err => {
            console.log(err)
            setResult(err.message + ': ' + err.response.data.result);
        });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOutlinedIcon /></Avatar>
          <Typography component="h1" variant="h5">Sign up</Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth
                  name="Username" // Internal
                  id="Username"
                  label="Username" // User see
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth
                  id="Email"
                  label="Email Address"
                  name="Email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth
                  id="Discord"
                  label="Discord"
                  name="Discord"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth
                  id="BattleTag"
                  label="BattleTag"
                  name="BattleTag"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="Password"
                />
              </Grid>
              <Grid item xs={12}>{result}</Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}