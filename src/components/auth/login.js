import { Grid, Paper, TextField, Button, Link } from '@material-ui/core';

const Login = () => {
    
    const paperStyle={padding :20,width:500, margin:"60px auto"}
    const btnstyle={margin:'8px 0'}

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Link href="#">Sign up</Link>
            </Paper>
        </Grid>
    )

}

export default Login;