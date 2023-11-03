import React from 'react';
import Box from '@mui/material/Box';
import Typography from "@material-ui/core/Typography";
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';



const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '60px',
  height: '25px',
  
};


const ProductRow = (props) => {

  return (
    <div className="row product ">
      <div className="col-lg-2 text-center">
        <img src={props.images} alt={props.id} height="150" width="150"  />
      </div>
      <div className="col-lg-8 product-detail">
      <h3 style={{fontFamily:'fantasy'}} >{props.title.toUpperCase()}</h3>
<Box style={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ ...commonStyles, borderRadius: 1, bgcolor: 'success.main', color: 'success.contrastText', }}>
        <div style={{ display: 'flex', textAlign:'center', marginLeft:'10px',fontFamily:'fantasy' }}  >
            <Typography sx={{  }}>
                {props.rating}
            </Typography>
            <StarRateSharpIcon fontSize="small"  />
        </div>
    </Box>
    <Box >
        <Typography variant="body1">{props.noOfRate} Ratings</Typography>
    </Box>
</Box>

<p style={{
  display: '-webkit-box',
  WebkitLineClamp: '3',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontFamily:'fantasy'
}}>
  {props.description}
</p>

      </div>
      <div className="col-lg-2 product-price">
        ${props.price}
      </div>
      </div>
  );
}

export default ProductRow;