import React from "react";
import { Card,CardActions,Button,CardContent , CardHeader, TextField} from "@mui/material";
import "./Login.css"
export function Login (){
    return(
        <div className="Login-container">
            <Card sx={{ Width: 400, padding: 3}}>
            <CardHeader title="Sign In"></CardHeader>
        <CardContent>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" />
        <TextField fullWidth label="Password" variant="outlined" margin="normal" />
        </CardContent>
        
        <CardActions>
        <Button fullWidth variant="contained">Login</Button>
        </CardActions>
      </Card>
        </div>
    )
}