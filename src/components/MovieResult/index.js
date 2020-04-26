import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core'
import style from './style';
import { withRouter } from 'react-router-dom'

const MovieResult = ({Title, Year, Type, imdbID, Poster, history }) => {	
	
	const handleSeeMovieClick = () => {
		history.push(`/movie/${imdbID}`)
	}
	const classes = style();
    return(
        <Card className={classes.cardContainer}>  
            <Grid container>
                <Grid item>
					<img src={Poster} alt={Title} className={classes.poster}/>
                </Grid>
				<Grid item className={classes.titlesContainer}>
					<Typography>{Title}</Typography>
					<Typography>{Year}</Typography>
					<Typography>{Type}</Typography>
					<Button variant= "contained" color="primary" onClick={handleSeeMovieClick}>Ver mas</Button>
                </Grid>
            </Grid>  
        </Card>
    );
}

export default withRouter(MovieResult)