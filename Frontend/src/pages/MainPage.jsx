import { useEffect, useState } from "react";
import SinglePlayerCard from "../components/SinglePlayerCard";
import Grid from "@mui/material/Grid";
import axios from 'axios'

export default function MainPage() {
  const [ requestlist, setRequestlist ] = useState([])

  useEffect(()=> {
    axios.get("/api/requests/current/").then(response => {
        console.log(response.data)
        setRequestlist(response.data.data)
    })
},[])

    return (
      <div className="MainPage">

        <h1>Main Page</h1>
        
        <Grid container>
          {requestlist.map(request => (
            <Grid item>
              <SinglePlayerCard userid = {request.UserID}
              teamid = {request.UserID} 
              message = {request.Message}
              date = {request.Date}></SinglePlayerCard> 
            </Grid>
          ))}

        </Grid>

      </div>
    );
  }