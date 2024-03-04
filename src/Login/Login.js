import React from "react";
import { Card,CardActions,Button,CardContent , CardHeader, TextField} from "@mui/material";
import "./Login.css"
import { useNavigate } from "react-router-dom";
export function Login (){
const navigate = useNavigate()
const Onlogin=()=> {
    navigate("/pages")

}

    return(
        <div className="Login-container">
            <Card sx={{ Width: 400, padding: 3}}>
            <CardHeader title="Sign In"></CardHeader>
        <CardContent>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" />
        <TextField fullWidth label="Password" variant="outlined" margin="normal" />
        </CardContent>
        
        <CardActions>
        <Button fullWidth variant="contained" onClick={Onlogin}>Login</Button>
        </CardActions>
      </Card>
        </div>
    )
}