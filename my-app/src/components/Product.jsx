import Typography from '@mui/material/Typography';
import Data from "../data.json"
import { useSelector,useDispatch } from 'react-redux';
import ProductCard from './ProductCard.jsx';
import { Container } from '@mui/material';
export default function Product() {

const{item} = useSelector((state)=>state.cart)


 
    return (
      
        <Container sx={{mt:"100px"}}> 
        <Typography variant='h4' align='center'sx={{marginTop:"20px"}} >
        Product
       </Typography>

     <div className='flex flex-wrap mt-10  mb-10 gap-10 justify-center '>
       
     {Data.products.map((row,index) => (
       <ProductCard key={index} {...row}/>
     ))}
      
    
    </div>
    </Container>
  );
}
