import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from "@mui/icons-material/Check";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useUserContext } from '../context/UserContext';
import axios from 'axios';

export default function SoloApplication(props) {
  const [open, setOpen] = React.useState(false);

  const { currentUser, handleUpdateUser } = useUserContext();

  const roles=["tank", "damage1", "damage2", "support1", "support2"]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ucfirst = string => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Apply to Join
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            formData.set("UserID", currentUser._id);
            formData.set("TeamID", props.teamID);
            formData.set("Date", new Date());

            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            roles.forEach(role => formJson[ucfirst(role)] = formData.get(ucfirst(role)) == "on" );
            axios.post('/api/soloApplications/create', formJson);
            handleClose();
          },
        }}
      >
        <DialogTitle>Application Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select your desired roles.
          </DialogContentText>
          {roles.map(role=> (
          <FormControlLabel
                control={
                  <Checkbox
                    name={ucfirst(role)}
                    label={ucfirst(role)}
                    defaultChecked={props[role]}
                    disabled={props[role]}
                  />
                }
                label={ucfirst(role)}
              /> ))}

              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                name="Message"
              />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Apply</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}