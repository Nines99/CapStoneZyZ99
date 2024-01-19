import { useEffect, useState } from "react"
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material"
import ShieldIcon from '@mui/icons-material/Shield';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import HealingIcon from '@mui/icons-material/Healing';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function MultiPlayerCard({
    teamid, teamname, tank, damage1, damage2, support1, support2, message, date
}) {

    // const [ teamname, setTeamname ] = useState({})

    const [ errMessage, setErrmessage ] = useState("")

    return (
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

            Team: {teamname}

          </Typography>
          <Typography variant="h5" component="div">
            <>
            
            Tank: {tank?<ShieldIcon sx={{color:"lightBlue"}}/>:<CheckBoxOutlineBlankIcon/>}
            Damage1: {damage1?<ElectricBoltIcon sx={{color:"pink"}}/>:<CheckBoxOutlineBlankIcon/>}
            Damage2: {damage2?<ElectricBoltIcon sx={{color:"red"}}/>:<CheckBoxOutlineBlankIcon/>}
            Support1: {support1?<HealingIcon sx={{color:"green"}}/>:<CheckBoxOutlineBlankIcon/>}
            Support2: {support2?<HealingIcon sx={{color:"yellow"}}/>:<CheckBoxOutlineBlankIcon/>}
            
            </>
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