import { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material"

export default function SinglePlayerCard({userid, teamid, message, date}) {
    const [ user, setUser ] = useState({})
    const [ roles, setRoles ] = useState({})
    const [ errMessage, setErrmessage ] = useState("")

    useEffect(()=> {
     let userDetails = {}
      axios.get("/api/users/" + userid).then(response => {
        userDetails = response.data.data
          setUser(userDetails)
      }).then(response => {
          let TagName = userDetails.BattleTag.split("#")[0]
          let TagNum = userDetails.BattleTag.split("#")[1]
          axios.get(`https://overwatch-api.zusor.io/v1/player/${TagName}-${TagNum}`).then(response => {
              setRoles(response.data[user.Platform])
              console.log(response.data[user.Platform])
          }).catch(err => {
        setErrmessage("Rank could not be found.")
        console.log(err)
      })
      })
  },[])

    return (
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Player: {user.Username}
          </Typography>
          <Typography variant="h5" component="div">
            {errMessage? errMessage:
            <>
            Rank: 
            Tank:{roles?.tank?.group}-{roles?.tank?.tier}
            Damage:{roles?.damage?.group}-{roles?.damage?.tier}
            Support:{roles?.support?.group}-{roles?.support?.tier}
            </>
            }
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Message: {message}
          </Typography>
          <Typography variant="body2">
            Date: {date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Inspect</Button>
        </CardActions>
      </Card>
    );
}