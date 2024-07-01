import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,  } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import {additem} from "../redux/items.js"






function ProductCard(props) {

    const {name,description} = props

   const dispatch = useDispatch()

    const handleClick = () =>{
       const row= {...props}
       dispatch(additem(row))
    }
  return (
    <div>
       <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button variant='Contained' size="small" startIcon={<AddShoppingCartIcon/>} sx={{backgroundColor:"red"}} onClick={handleClick} >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default ProductCard
