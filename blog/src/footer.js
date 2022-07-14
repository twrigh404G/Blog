import * as React from 'react';
import Grid from '@mui/material/Grid';




const Footer = (props) => {
    return(
        <Grid container sx={{
            width: "100%",
            border: "1px solid black",
            marginBottom: "auto"

            }}>
            <Grid item xs={8}>
                <item>new div</item>
            </Grid>
            <Grid item xs={4}>
                <item>new div</item>
            </Grid>
            <Grid item xs={8}>
                <item>new div</item>
            </Grid>
            <Grid item xs={4}>
                <item>new div</item>
            </Grid>
        </Grid>
    )
}

export default Footer;