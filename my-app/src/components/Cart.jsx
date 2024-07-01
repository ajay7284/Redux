import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { removeAllitem, removeitem } from "../redux/items";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { item } = useSelector((state) => state.cart);
  const cartQuntity = item.length;
  console.log(cartQuntity) 
  console.log(item)
 const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
         dispatch(removeitem(itemId))
         const item = item.filter(product => product.id !== itemId )

  };


  const removeAll = () =>{
    dispatch(removeAllitem())
  }

  return (
    <Container sx={{mt:"100px"}}>
      <Typography variant="h4" align="center" sx={{ marginTop: "20px" }}>
        Checkout
      </Typography>

      <div className="flex flex-wrap mt-10 mb-10 gap-10 justify-center md:gap-5,m-0,mt-10">
        {item.map(row => {
            const {id} = row;
         return (<Card sx={{ maxWidth: 345 }} key={id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=a2f8c40e39b8dfee1534eb32acfa6bc7"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {row.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {row.description}
                </Typography>

                <Typography variant="h6" sx={{mt:"10px"}} color="text.secondary">
                 
                  quntity:{row.quantity}
                </Typography>

              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                variant="Contained"
                size="small"
                startIcon={<RemoveShoppingCartIcon />}
                sx={{ backgroundColor: "red" }}
                onClick={() => handleRemove(id)}
              >
                remove from cart
              </Button>
            </CardActions>
          </Card>)
        })}
      </div>

      {
        cartQuntity=== 0 ? (
            <h2>Cart is empty</h2>
        ):(
            <div className="flex justify-center ">
        <Button variant="contained" color="error" onClick={removeAll}>Remove All Product</Button>
      </div>
        )
      }
     
    </Container>
  );
}
