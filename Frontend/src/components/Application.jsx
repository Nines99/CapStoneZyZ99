import { useEffect, useState } from "react"
import axios from "axios"
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material"
import ShieldIcon from '@mui/icons-material/Shield';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HealingIcon from '@mui/icons-material/Healing';
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function Application({
    userid, 
    teamname, 
    tank, 
    damage1, 
    damage2, 
    support1, 
    support2, 
    message, 
    date, 
    applicationid, 
    teamid,
    status
}) {

    const [ errMessage, setErrmessage ] = useState("")
    const [ user, setUser ] = useState({})
    const [ roles, setRoles ] = useState({})
    const [formupdate, setFormUpdate] = useState(false);
   
    useEffect(()=> {
        let userDetails = {}
         axios.get("/api/users/" + userid).then(response => {
           userDetails = response.data.data
             setUser(userDetails)
         }).then(response => {
           console.log(userDetails)
             let TagName = userDetails.BattleTag.split("#")[0]
             let TagNum = userDetails.BattleTag.split("#")[1]
             axios.get(`https://overwatch-api.zusor.io/v1/player/${TagName}-${TagNum}`).then(response => {
                 setRoles(response.data[userDetails.Platform])
                 console.log(response.data[userDetails.Platform])
             }).catch(err => {
           setErrmessage("Rank could not be found.")
           console.log(err)
         })
         })
     },[])

     const handleAccept = () => {
      console.log("Accepted!")
        axios.put(`/api/soloApplications/${applicationid}`, {Status: "Accepted"})
     const roleUpdates = {}
      if(tank)roleUpdates.Tank=true
      if(damage1)roleUpdates.Damage1=true
      if(damage2)roleUpdates.Damage2=true
      if(support1)roleUpdates.Support1=true
      if(support2)roleUpdates.Support2=true
        axios.put(`/api/teams/${teamid}`, roleUpdates).then(response => {
          setFormUpdate(true)
        })
     }

     const handleDecline = () => {
      console.log("Declined!")
      axios.put(`/api/soloApplications/${applicationid}`, {Status: "Declined"}).then(response => {
        setFormUpdate(true)
      })
     }
     const borderColor = status == "Accepted"?"green":status == "Declined"?"red": "lightgrey";

    return (
      <Card variant="outlined" sx={{border: `1px solid ${borderColor}`}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

            Player: {user.Username + user.BattleTag}
            Applied Role: 
            {tank?<><ShieldIcon sx={{color:"white"}}/> {roles?.tank?.group + roles?.tank?.tier}</>:null}
            {damage1 || damage2? <><ElectricBoltIcon sx={{color:"white"}}/> {roles?.damage?.group + roles?.damage?.tier}</>:null}
            {support1 || support2? <><HealingIcon sx={{color:"white"}}/> {roles?.support?.group + roles?.support?.tier}</>:null}

            Applied Team: {teamname}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Message: {message}
          </Typography>
          <Typography variant="body2">
            Date: {date}
          </Typography>
        </CardContent>
        <CardActions>
          {status=="Pending"?
       <>
       <Button variant="outlined" startIcon={<DoneIcon />} onClick = {handleAccept}>
          Accept
        </Button>
        <Button variant="outlined" startIcon={<ClearIcon />} onClick = {handleDecline}>
          Decline
        </Button> 
        </>: status == "Accepted"? 
        <Button variant="contained" color="success">
        Accepted
        </Button>: 
        <Button variant="contained" color="error">
        Declined
        </Button>
        }
        </CardActions>
        {formupdate ? (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Great Success! Sensational! Update Worked!
            </Alert>
          ) : null}
      </Card>
    );
}