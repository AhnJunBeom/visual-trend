import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, CardActionArea, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MovieInfo from './movieInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 345,
        height: 300,
        marginTop: 40,
        marginLeft: 6,
        marginRight: 6
    },
    media: {
        height: 200,
    }
}))

function Movie({ key, id, year, title, summary, poster, bigPoster}) {
    const classes = useStyles();
    const [modal, setModal] = React.useState(false);

    const showModal = () => {
        setModal(true);
    }

    const closeModal = () => { 
        setModal(false);
    }

    return(
        <>
            <Card className= {classes.root}>
                <CardActionArea onClick={showModal}>
                    <CardMedia height= {200} alt={title} component="img"  title={title} image={bigPoster} />
                    <CardContent>
                        <Typography variant="h6" component="h2" >
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <MovieInfo title={title} id={id} summary={summary} poster={bigPoster} year={year} modal= {modal} closeModal= {closeModal} />
        </>
    );
}

export default Movie;