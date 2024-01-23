import { useEffect, useState } from "react";
import axios from 'axios'
import { useUserContext } from "../context/UserContext";
import { Grid } from "@mui/material";
import Application from "../components/Application"

export default function Applications() {
    const [ applicationlist, setApplicationlist ] = useState([])
    const { currentUser, handleUpdateUser } = useUserContext();
  
    useEffect(()=> {
    const url = `/api/soloApplications/user/${currentUser._id}`
      axios.get(url).then(response => {
          console.log(response.data)
          setApplicationlist(response.data.data)
      })
  },[])

    return (
      <div className="Applications">
          
        <h1>Applications</h1>
          <h2>This is where all the Applications go</h2>

          <Grid container>
          {applicationlist.map(application => (
            <Grid item>
              <Application 
              userid = {application.UserID}
              teamname = {application.TeamID.TeamName}
              tank = {application.Tank}
              damage1 = {application.Damage1}
              damage2 = {application.Damage2}
              support1 = {application.Support1}
              support2 = {application.Support2}
              message = {application.Message}
              date = {application.Date}
              applicationid = {application._id}
              teamid = {application.TeamID._id}
              status = {application.Status}>
              </Application >
              </Grid>
          ))}
          </Grid>
        </div>
        )
}