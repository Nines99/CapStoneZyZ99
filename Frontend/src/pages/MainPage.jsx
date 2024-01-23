import { useEffect, useState } from "react";
import SinglePlayerCard from "../components/SinglePlayerCard";
import Grid from "@mui/material/Grid";
import axios from 'axios'
import { useUserContext } from "../context/UserContext";
import MultiPlayerCard from "../components/MultiPlayerCard";


export default function MainPage() {
  const [ requestlist, setRequestlist ] = useState([])
  const { currentUser, handleUpdateUser } = useUserContext();

  useEffect(()=> {
  const url = currentUser.Playertype=="team"?"/api/requests/current/":"/api/teams/current/"
    axios.get(url).then(response => {
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
              {currentUser.Playertype=="team"
              ?
              <SinglePlayerCard 
              userid = {request.UserID}
              teamid = {request._id} 
              message = {request.Message}
              date = {request.Date}>
              </SinglePlayerCard>
              :
              <MultiPlayerCard
              teamname = {request.TeamName}
              teamid = {request._id} 
              tank = {request.Tank}
              damage1 = {request.Damage1}
              damage2 = {request.Damage2}
              support1 = {request.Support1}
              support2 = {request.Support2}

              message = {request.Message}
              date = {request.Date}
              >
              </MultiPlayerCard>
              }
            </Grid>
          ))}

        </Grid>

      </div>
    );
  }