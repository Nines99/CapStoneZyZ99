import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import { useUserContext } from "../context/UserContext";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function ProfilePage() {
  const { currentUser, handleUpdateUser } = useUserContext();

  const [platform, setPlatform] = React.useState(currentUser.Platform);
  const [username, setUsername] = React.useState(currentUser.Username);
  const [password, setPassword] = React.useState(currentUser.Password);
  const [email, setEmail] = React.useState(currentUser.Email);
  const [discord, setDiscord] = React.useState(currentUser.Discord);
  const [battletag, setBattleTag] = React.useState(currentUser.BattleTag);

  const [formupdate, setFormUpdate] = React.useState(false);

  const handleChange = (event, newPlatform) => {
    setPlatform(newPlatform);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form");
    const updatedUserInfo = {
      Username: username,
      Password: password,
      Email: email,
      Discord: discord,
      BattleTag: battletag,
      Platform: platform,
    };
    axios.put(`/api/users/${currentUser._id}`, updatedUserInfo).then(response => {
      setFormUpdate(true);
    })
  };

  return (
    <div className="ProfilePage">
      <h1>Profile Page</h1>

      <Container component="main" maxWidth="xs">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="Discord"
                variant="outlined"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-basic"
                label="BattleTag"
                variant="outlined"
                value={battletag}
                onChange={(e) => setBattleTag(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                color="primary"
                value={platform}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="pc">PC</ToggleButton>
                <ToggleButton value="console">Console</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>

          {formupdate ? (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Great Success! Sensational! Update Worked!
            </Alert>
          ) : null}
        </Box>
      </Container>
    </div>
  );
}
