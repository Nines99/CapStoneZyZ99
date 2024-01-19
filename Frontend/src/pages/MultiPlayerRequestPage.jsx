import * as React from "react";
import TextField from "@mui/material/TextField";
import { useUserContext } from "../context/UserContext";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import axios from "axios";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function MultiPlayerRequestPage() {
  const { currentUser, handleUpdateUser } = useUserContext();

  const [teamname, setTeamname] = React.useState("");
  const [tank, setTank] = React.useState(false);
  const [damage1, setDamage1] = React.useState(false);
  const [damage2, setDamage2] = React.useState(false);
  const [support1, setSupport1] = React.useState(false);
  const [support2, setSupport2] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const [formupdate, setFormUpdate] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form");
    const newMPRequestInfo = {
      UserID: currentUser._id,
      TeamName: teamname,
      Tank: tank,
      Damage1: damage1,
      Damage2: damage2,
      Support1: support1,
      Support2: support2,
      Message: message,
      Date: new Date(),
    };
    axios.post(`/api/teams/create`, newMPRequestInfo).then((response) => {
      setFormUpdate(true);
    });
  };

  return (
    <div className="MultiPlayerRequestPage">
      <h1>MultiPlayer Request Page</h1>

      <Container component="main" maxWidth="xs">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Team Name"
                variant="outlined"
                value={teamname}
                onChange={(e) => setTeamname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    label="tank"
                    checked={tank}
                    onChange={(e) => setTank(e.target.checked)}
                  />
                }
                label="Tank"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    label="damage1"
                    checked={damage1}
                    onChange={(e) => setDamage1(e.target.checked)}
                    color="secondary"
                  />
                }
                label="Damage 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    label="damage2"
                    checked={damage2}
                    onChange={(e) => setDamage2(e.target.checked)}
                    color="success"
                  />
                }
                label="Damage 2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    label="support1"
                    checked={support1}
                    onChange={(e) => setSupport1(e.target.checked)}
                    color="default"
                  />
                }
                label="Support 1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    label="support2"
                    checked={support2}
                    onChange={(e) => setSupport2(e.target.checked)}
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Support 2"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
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
