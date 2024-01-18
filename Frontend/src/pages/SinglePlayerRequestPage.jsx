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

export default function SinglePlayerRequestPage() {
  const { currentUser, handleUpdateUser } = useUserContext();

  const [message, setMessage] = React.useState("");

  const [formupdate, setFormUpdate] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form");
    const newSPRequestInfo = {
      UserID: currentUser._id,
      Message: message,
      Date: new Date(),
    };
    axios.post(`/api/requests/create`, newSPRequestInfo).then(response => {
      setFormUpdate(true);
    })
  };

  return (
    <div className="SinglePlayerRequestPage">
      <h1>SinglePlayer Request Page</h1>

      <Container component="main" maxWidth="xs">
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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