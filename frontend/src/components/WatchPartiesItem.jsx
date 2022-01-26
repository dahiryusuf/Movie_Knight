import * as React from 'react';
import { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button} from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal"





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));







export default function WatchPartiesItem(props ) {
  const [modalShow, setModalShow] = useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [image, setImage] = useState('');
  const [cookies, setCookie] = useCookies(['user']);
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [m, setM] = useState([]);
  const id = cookies.Name

  

 
  const handleRemove = (event) => {
    event.preventDefault();
    const movie_id = props.id

    axios.post(`http://localhost:3001/api/users/watchpartiess/delete`, {
      movie_id: movie_id
    })
    .then(function (response) {
      console.log(response.data);
      window.location.reload(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }
let topMovie = 0


  const handleSubmit = (event) => {
    event.preventDefault();
    const movie_id = props.id
    
    axios.get(`http://localhost:3001/api/users/moviepicks/${movie_id}`, {
      movie_id,
    
    })
    .then(function (response) {
   topMovie = response.data[0].movie_id;

   axios.get(`https://api.themoviedb.org/3/movie/${topMovie}?api_key=79ea73dd8ffddae85c10ba47e73e9093&language=en-US`).then((res,req) => { 
console.log(res.data)
    setMovie(res.data)
 
  const id = props.id
   const poster_path = `'https://image.tmdb.org/t/p/w200/${res.data.poster_path }'`
   const movie_id = res.data.id
   console.log(poster_path, movie_id)
  axios.post(`http://localhost:3001/api/users/watchparties/${id}` , {
    poster_path : poster_path,
     movie_id : movie_id
    
  }).then((res,req) => {
    console.log(res)
    setM(res)
    window.location.reload(true)
 })
    })
    .catch(function (error) {
      console.log(error);
    });
    
  })
  
  
  }
  const handleExpandClick = (event) => {

      event.preventDefault();

      const movie_id = props.id
      
      setExpanded(!expanded);
      axios.get(`http://localhost:3001/api/users/moviepicks/${movie_id}`, {
        movie_id,
      
      })
      .then(function (response) {
     let ttopMovie = response.data[0].movie_id;
  
     axios.get(`https://api.themoviedb.org/3/movie/${ttopMovie}?api_key=79ea73dd8ffddae85c10ba47e73e9093&language=en-US`).then((res,req) => { 
  console.log(res.data)
      setMovies(res.data)
   
    })
  })
  };
  const handleload = () => {
    setModalShow(true)
  
   
  };

  return (
  
    <Card  sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            L
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Layla's Watch Party"
        subheader={props.party_date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.poster_path}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.messages}
          <Button variant="primary" 
          type="button" 
          className="delete button"
          onClick={handleSubmit}
        
          >Generate Movie</Button>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete">
        <DeleteForeverIcon onClick={handleRemove} />
        </IconButton>
        <IconButton aria-label="share" onClick={handleload}>
        <MyVerticallyCenteredModal
    link = {"test"}
    show={modalShow}
    onHide={() =>  setModalShow(false)}
  /> 
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
          <Typography paragraph> <h2 sx={{ textAlign: 'center' }}>{movies.original_title} </h2>
          <h5>  Released: {movies.release_date}</h5>
          </Typography>
          <Typography paragraph>
            <h5 sx={{ fontWeight: 'bold' }}>Overview</h5>
           {movies.overview}
        
          </Typography> 
              
         
        </CardContent>
      </Collapse>
   
    </Card>
   

  )}
